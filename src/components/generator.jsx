import React, { useState } from 'react';
import '../styles/generator.css';
import '../styles/globals.css';

const Generator = () => {
  const [formData, setFormData] = useState({
    repositoryFullName: '',
    email: '', // Nuevo campo de correo electrónico
    technology: 'node', // Default to 'node'
    docker: false,
    notify: 'none',
    triggers: {
      workflow_dispatch: true,
      push: {
        active: false,
        branches: ''
      },
      schedule: {
        active: false,
        cron: ''
      },
      pull_request: {
        active: false,
        branches: ''
      }
    },
    runner: {
      type: 'github', // Default to 'github'
      labels: ''
    },
    deploy: 'none' // Default to 'none'
  });

  const [errors, setErrors] = useState({
    repositoryFullName: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const keys = name.split('.');
    if (keys.length === 1) {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    } else {
      setFormData(prevState => {
        let updatedData = { ...prevState };
        let temp = updatedData;
        for (let i = 0; i < keys.length - 1; i++) {
          temp = temp[keys[i]];
        }
        temp[keys[keys.length - 1]] = type === 'checkbox' ? checked : value;

        // Update active status based on the value of branches or cron
        if (keys.includes('push') && keys.includes('branches')) {
          temp.active = value.trim() !== '';
        }
        if (keys.includes('schedule') && keys.includes('cron')) {
          temp.active = value.trim() !== '';
        }
        if (keys.includes('pull_request') && keys.includes('branches')) {
          temp.active = value.trim() !== '';
        }

        return updatedData;
      });
    }
  };

  const handleRunnerTypeChange = (e) => {
    const isChecked = e.target.checked;
    setFormData(prevState => ({
      ...prevState,
      runner: {
        ...prevState.runner,
        type: isChecked ? 'self-hosted' : 'github'
      }
    }));
  };

  const handleSubmit = async () => {
    let newErrors = { repositoryFullName: '', email: '' };

    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex for repository full name validation (e.g., alvaro/test)
    const repoNameRegex = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
    // Regex for triggers validation (comma-separated words without spaces)
    const triggersRegex = /^(\w+)(,\w+)*$/;
    // Regex for schedule cron validation
    const cronRegex = /^(\*|([0-5]?\d)) (\*|([01]?\d|2[0-3])) (\*|([01]?\d|2[0-9]|3[01])) (\*|(0?[1-9]|1[0-2])) (\*|([0-6]))$/;

    if (!formData.repositoryFullName.trim()) {
      newErrors.repositoryFullName = '❗️ Repository Full Name is mandatory.';
    } else if (!repoNameRegex.test(formData.repositoryFullName.trim())) {
      newErrors.repositoryFullName = '❗️ Repository Full Name must be in the format "username/repository".';
    }

    if (!formData.email.trim()) {
      newErrors.email = '❗️ Email is mandatory.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = '❗️ Invalid email format.';
    }

    // Validate triggers
    const { push, schedule, pull_request } = formData.triggers;
    if (push.branches && !triggersRegex.test(push.branches.trim())) {
      newErrors.pushBranches = '❗️ Push branches must be comma-separated words without spaces.';
    }
    if (pull_request.branches && !triggersRegex.test(pull_request.branches.trim())) {
      newErrors.pullRequestBranches = '❗️ Pull request branches must be comma-separated words without spaces.';
    }
    if (schedule.cron && !cronRegex.test(schedule.cron.trim())) {
      newErrors.scheduleCron = '❗️ Schedule cron must be in the format "minute hour day-of-month month day-of-week" with valid values.';
    }

    if (newErrors.repositoryFullName || newErrors.email || newErrors.pushBranches || newErrors.pullRequestBranches || newErrors.scheduleCron) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('https://7spaa9shqg.execute-api.eu-north-1.amazonaws.com/production/store-user-inputs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Data saved successfully');
        // Redirect user to install the GitHub App
        window.location.href = 'https://github.com/apps/workflow-generator-github-actions/installations/new';
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
        <div id="get-started" className="generator_container">
      <h2 className="generator_title">Create your custom GitHub workflow</h2>
      <p className="generator_subtitle">Answer a few questions to generate your personalized GitHub workflow file.</p>
      <div className="questions_container">
        <p className="generator_title_h3">General information</p>
        <div className="question_block">
          <label className="question_label" htmlFor="repositoryFullName">Repository Full Name:</label>
          <label className="question_description_label">e.g. github-username/repository-name</label>
          <input
            id="repositoryFullName"
            type="text"
            className="question_input"
            name="repositoryFullName"
            value={formData.repositoryFullName}
            onChange={handleInputChange}
            required
          />
          {errors.repositoryFullName && <p className="error_message">{errors.repositoryFullName}</p>}
        </div>
    
        <div className="question_block">
          <label className="question_label" htmlFor="technology">Technology:</label>
          <select
            id="technology"
            className="question_input short_select"
            name="technology"
            value={formData.technology}
            onChange={handleInputChange}
          >
            <option value="maven">Maven Java</option>
            <option value="node">Node</option>
            <option value="python">Python</option>
          </select>
        </div>
    
        <div className="question_block">
          <label className="question_label" htmlFor="docker">Are you using Docker?</label>
          <div className="checkbox_container">
            <input
              id="docker"
              type="checkbox"
              className="question_input"
              name="docker"
              checked={formData.docker}
              onChange={handleInputChange}
            />
            <span>Yes</span>
          </div>
        </div>
    
        <div className="question_block">
          <label className="question_label" htmlFor="notify">Send notifications?</label>
          <label className="question_description_label">You can send a notification to your Slack or Discord chat</label>
          <select
            id="notify"
            className="question_input short_select"
            name="notify"
            value={formData.notify}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="slack">Slack</option>
            <option value="discord">Discord</option>
          </select>
        </div>
    
        <div className="question_block">
          <label className="question_label" htmlFor="deploy">Deploy:</label>
          <label className="question_description_label">Chose the deployment method for your app</label>
          <select
            id="deploy"
            className="question_input short_select"
            name="deploy"
            value={formData.deploy}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="dockerhub">DockerHub</option>
            <option value="aws-s3">AWS S3</option>
            <option value="aws-ecr">AWS ECR</option>
          </select>
        </div>
    
        <p className="generator_title_h3">Triggers</p>
        <div className="question_block">
          <label className="question_label" htmlFor="triggersPushBranches">Push Branches (comma separated):</label>
          <label className="question_description_label">e.g. 'main,development' or leave blank if none</label>
          <input
            id="triggersPushBranches"
            type="text"
            className="question_input"
            name="triggers.push.branches"
            value={formData.triggers.push.branches}
            onChange={handleInputChange}
          />
          {errors.pushBranches && <p className="error_message">{errors.pushBranches}</p>}
        </div>
    
        <div className="question_block">
          <label className="question_label" htmlFor="triggersScheduleCron">Schedule Cron:</label>
          <label className="question_description_label">minute[0,59] hour[0,23] day-month[1,31] month-year[1,12] day-week[0,6] (0=sunday)</label>
          <label className="question_description_label">e.g. '0 12 * * 4' 👉🏼 <a href="https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007BFF' }}>more help</a></label>
          <input
            id="triggersScheduleCron"
            type="text"
            className="question_input"
            name="triggers.schedule.cron"
            value={formData.triggers.schedule.cron}
            onChange={handleInputChange}
          />
          {errors.scheduleCron && <p className="error_message">{errors.scheduleCron}</p>}
        </div>
    
        <div className="question_block">
          <label className="question_label" htmlFor="triggersPullRequestBranches">Pull Request Branches (comma separated):</label>
          <label className="question_description_label">e.g. 'main,development' or leave blank if none</label>
          <input
            id="triggersPullRequestBranches"
            type="text"
            className="question_input"
            name="triggers.pull_request.branches"
            value={formData.triggers.pull_request.branches}
            onChange={handleInputChange}
          />
          {errors.pullRequestBranches && <p className="error_message">{errors.pullRequestBranches}</p>}
        </div>
    
        <p className="generator_title_h3">Runners</p>
        <div className="question_block">
          <label className="question_label" htmlFor="runnerType">Do you plan to use your self-hosted runners?</label>
          <label className="question_description_label">Not sure? Learn about <a href="https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#007BFF' }}>self-hosted runners</a></label>
          <div className="checkbox_container">
            <input
              id="runnerType"
              type="checkbox"
              className="question_input"
              name="runner.type"
              checked={formData.runner.type === 'self-hosted'}
              onChange={handleRunnerTypeChange}
            />
            <span>Yes</span>
          </div>
        </div>
        {formData.runner.type === 'self-hosted' && (
          <div className="question_block">
            <label className="question_label" htmlFor="runnerLabels">Runner Labels (comma separated):</label>
            <label className="question_description_label">e.g. 'self-hosted,linux,node'</label>
            <input
              id="runnerLabels"
              type="text"
              className="question_input"
              name="runner.labels"
              value={formData.runner.labels}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="question_block">
          <label className="question_label" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            className="question_input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error_message">{errors.email}</p>}
        </div>
      </div>
      <p className="generator_note">
        <strong>⚠️ Note:</strong> This will generate a GitHub Actions workflow file and configuration file, which will be added to your repository. Ensure you install the GitHub App <strong>only</strong> in the repository where you want the workflow to be executed.<br /><br />After installation, please refer to the <a href='https://github.com/alvarogarciapiz/gawg/wiki' style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>documentation</a> to complete the configuration. By adding the GitHub App, you agree to the <a href='/terms-conditions' style={{ textDecoration: 'none', color: 'inherit' }}>Terms of Service</a> and <span style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</span>.
      </p>
      <button className="submit_button" onClick={handleSubmit}>Install in your repo 🥳</button>
    </div>
  );
};

export default Generator;