# GAWG: GitHub Actions Workflow Generator

Explore **GAWG**, your go-to solution for effortless CI/CD integration with GitHub Actions. Automate your pipeline in minutes with custom workflows tailored to your project, without the hassle of manual configuration.

# Quick links if you're already familiar
## 👋🏻 Start here
- [**Usage page if you filled the website** form and installed the app](https://github.com/alvarogarciapiz/gawg/wiki/Usage-(If-you-have-filled-the-website-form))
- [**Usage page if you only installed the app**](https://github.com/alvarogarciapiz/gawg/wiki/Usage-(If-you've-just-installed-the-app))

## 🧠 Don't forget
- [Secrets configuration](https://github.com/alvarogarciapiz/gawg/wiki/Secrets-configuration)
- [workflow_config.yml configuration](https://github.com/alvarogarciapiz/gawg/wiki/Configure-workflow_config.yml-file)
- [sonar‐project.properties configuration](https://github.com/alvarogarciapiz/gawg/wiki/Configure-sonar%E2%80%90project.properties-file)


# 🛫 How to start?

1. **Fill out the form** – Provide your project details like repo name, technology stack, and workflow preferences on the [website](https://gawg.lvrpiz.com/#get-started).
2. **Install the GAWG GitHub App** – Connect your repository seamlessly to the app for automatic workflow generation.
3. **Configure necessary files** – If needed, adjust configuration files for optimal performance and customization to your CI/CD pipeline.

## Overview

GAWG (GitHub Actions Workflow Generator) is a comprehensive solution designed to simplify the setup and management of CI/CD workflows in GitHub Actions. The project aims to streamline the process of creating and configuring workflows by leveraging a suite of custom-developed actions and a user-friendly web interface.

# More about GAWG

## How It Works

GAWG integrates several key components to provide a seamless experience for automating CI/CD pipelines:

### Custom GitHub Actions

At the core of GAWG are a series of custom-developed GitHub Actions that handle various stages of the CI/CD process. These actions are designed to:

- **Validate Configurations**: Ensure that all required configurations are correctly set up.
- **Build**: Compile and package your application according to the specified technology (Java, Python, Node.js, etc.).
- **Test**: Run automated tests to validate the correctness of your application.
- **Quality**: Analyze code quality and integrate with SonarCloud for advanced code analysis.
- **Deploy**: Deploy your application to various environments (e.g., EKS, DockerHub, S3).
- **Notify**: Send notifications to your chosen messaging platform (Slack, Discord, Email, etc.).
- **Release**: Manage versioning and releases of your application.

### Web Interface

GAWG features a React-based web application that allows users to easily configure their CI/CD pipelines. The interface is designed to be intuitive and user-friendly, providing a streamlined experience for setting up workflows. Users can fill out a form with necessary details, such as:

- Repository full name
- Technology stack (Java, Node.js, Python, etc.)
- Deployment type
- Notification preferences

### Backend and Database

The backend of the GAWG web application is built using AWS services, which handle webhook events and process user configurations. The data is stored in a DynamoDB database, ensuring scalability and reliability.

### Configuration

Once the form is filled out and submitted, the GAWG system automatically generates a GitHub Actions workflow file tailored to your specifications. This workflow file, along with the `sonar-project.properties` and `workflow_config.yml`, is then used to set up and manage your CI/CD pipelines.

### Getting Started

To get started with GAWG, follow the instructions in the [Installation Guide](https://github.com/alvarogarciapiz/gawg/wiki/installation-guide) and configure your GitHub repository using the generated workflow files. For detailed information on how to use GAWG, refer to the [Usage Documentation](https://github.com/alvarogarciapiz/gawg/wiki/Usage-(If-you-have-filled-the-website-form)).

## Support

If you encounter any issues or have questions, please visit our [Support Page](https://github.com/alvarogarciapiz/gawg/issues) and open an issue. Your feedback is highly appreciated and helps us improve the product.

---

Thank you for using GAWG! We hope it makes your CI/CD workflow management more efficient and enjoyable.