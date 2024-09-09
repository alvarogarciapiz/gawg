import React, { useState } from 'react';
import '../styles/generator.css';

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
    if (!formData.repositoryFullName.trim()) {
      newErrors.repositoryFullName = 'Repository Full Name is mandatory.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is mandatory.';
    }

    if (newErrors.repositoryFullName || newErrors.email) {
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
        window.location.href = 'https://github.com/apps/gawg-workflow-generator/installations/new';
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
        <div className="question_block">
          <label className="question_label">Repository Full Name:</label>
          <input
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
          <label className="question_label">Technology:</label>
          <select
            className="question_input"
            name="technology"
            value={formData.technology}
            onChange={handleInputChange}
          >
            <option value="java">Java</option>
            <option value="node">Node</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div className="question_block">
          <label className="question_label">Docker:</label>
          <input
            type="checkbox"
            className="question_input"
            name="docker"
            checked={formData.docker}
            onChange={handleInputChange}
          />
        </div>
        <div className="question_block">
          <label className="question_label">Notify:</label>
          <select
            className="question_input"
            name="notify"
            value={formData.notify}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="slack">Slack</option>
            <option value="email">Email</option>
            <option value="msteams">Microsoft Teams</option>
          </select>
        </div>
        <div className="question_block">
          <label className="question_label">Push Branches (comma separated):</label>
          <input
            type="text"
            className="question_input"
            name="triggers.push.branches"
            value={formData.triggers.push.branches}
            onChange={handleInputChange}
          />
        </div>
        <div className="question_block">
          <label className="question_label">Schedule Cron:</label>
          <input
            type="text"
            className="question_input"
            name="triggers.schedule.cron"
            value={formData.triggers.schedule.cron}
            onChange={handleInputChange}
          />
        </div>
        <div className="question_block">
          <label className="question_label">Pull Request Branches (comma separated):</label>
          <input
            type="text"
            className="question_input"
            name="triggers.pull_request.branches"
            value={formData.triggers.pull_request.branches}
            onChange={handleInputChange}
          />
        </div>
        <div className="question_block">
          <label className="question_label">Runner Type:</label>
          <input
            type="checkbox"
            className="question_input"
            name="runner.type"
            checked={formData.runner.type === 'self-hosted'}
            onChange={handleRunnerTypeChange}
          />
          <span>Self-hosted</span>
        </div>
        {formData.runner.type === 'self-hosted' && (
          <div className="question_block">
            <label className="question_label">Runner Labels (comma separated):</label>
            <input
              type="text"
              className="question_input"
              name="runner.labels"
              value={formData.runner.labels}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="question_block">
          <label className="question_label">Deploy:</label>
          <select
            className="question_input"
            name="deploy"
            value={formData.deploy}
            onChange={handleInputChange}
          >
            <option value="none">None</option>
            <option value="dockerhub">DockerHub</option>
            <option value="s3">S3</option>
          </select>
        </div>
        <div className="question_block">
          <label className="question_label">Email:</label>
          <input
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
      <button className="submit_button" onClick={handleSubmit}>Generate File</button>
    </div>
  );
};

export default Generator;