import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read JSON input from a file
function readJsonInput(filePath) {
    const jsonInput = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonInput);
}

// Function to read the template file
function readTemplate(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// Function to create the runner type string
function createRunnerTypeString(config) {
    if (config.runner.type === 'self-hosted') {
        const labels = config.runner.labels || [];
        if (labels.length > 0) {
            return `[self-hosted, ${labels.join(', ')}]`;
        } else {
            return '[self-hosted]';
        }
    } else {
        return 'ubuntu-latest';
    }
}

function createTriggers(triggers) {
    let triggersStr = '';

    if (triggers.workflow_dispatch) {
        triggersStr += 'workflow_dispatch:\n';
    }

    if (triggers.push && triggers.push.active) {
        triggersStr += '  push:\n';
        if (triggers.push.branches) {
            triggersStr += '    branches:\n';
            triggers.push.branches.forEach(branch => {
                triggersStr += `      - ${branch}\n`;
            });
        }
        if (triggers.push.paths) {
            triggersStr += '    paths:\n';
            triggers.push.paths.forEach(path => {
                triggersStr += `      - '${path}'\n`;
            });
        }
    }

    if (triggers.schedule && triggers.schedule.active) {
        triggersStr += '  schedule:\n';
        triggersStr += `    - cron: '${triggers.schedule.cron}'\n`;
    }

    if (triggers.pull_request && triggers.pull_request.active) {
        triggersStr += '  pull_request:\n';
        if (triggers.pull_request.branches) {
            triggersStr += '    branches:\n';
            triggers.pull_request.branches.forEach(branch => {
                triggersStr += `      - ${branch}\n`;
            });
        }
        if (triggers.pull_request.types) {
            triggersStr += '    types:\n';
            triggers.pull_request.types.forEach(type => {
                triggersStr += `      - ${type}\n`;
            });
        }
    }

    return triggersStr;
}

// Function to perform substitutions in the template
function performSubstitutions(template, config) {
    return template
        .replaceAll('[[WORKFLOW_NAME]]', config.technology + ' Build and Deploy Workflow')
        .replaceAll('[[ON_TRIGGERS]]', createTriggers(config.triggers))
        .replaceAll('[[RUNS_ON_CONFIG]]', createRunnerTypeString(config))
        .replaceAll('[[TECHNOLOGY]]', config.technology)
        .replaceAll('[[MESSAGING_APP]]', "'" + config.notify + "'")
        .replaceAll('[[DOCKER_ENABLED]]', config.docker ? 'true' : 'false')
        .replaceAll('[[SELF_HOSTED_RUNNER_ENABLED]]', config.runner.type == 'self-hosted' ? 'true' : 'false')
        .replaceAll('[[DEPLOYMENT_TYPE]]', "JUST_TESTING")
}

// Function to write the output file
function writeOutputFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}

// Main execution
const inputFilePath = path.join(__dirname, '../inputs.json');
const config = readJsonInput(inputFilePath);

const templatePath = path.join(__dirname, '../templates/main.yml');
const template = readTemplate(templatePath);

const output = performSubstitutions(template, config);

const outputPath = path.join(__dirname, '../output.yml');
writeOutputFile(outputPath, output);