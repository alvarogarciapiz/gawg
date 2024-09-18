# Contributing to GAWG

First of all, thank you for considering contributing to the GAWG project! Your involvement is vital to the success of our platform.

## About This Repository

Please note that this repository contains only the public website for GAWG. The website showcases our product and provides a starting point for users to understand and interact with the GAWG platform. The main functionalities of GAWG, including the actions and workflows, are distributed across several other repositories.

If you are interested in contributing to the core features and actions of GAWG, please refer to the appropriate linked repositories listed below.

## Linked Repositories

GAWG is composed of multiple repositories, each handling different aspects of the platform:

- **[GAWG Validate build](https://github.com/alvarogarciapiz/gawg-validate-build)**: Validates inputs and configuration files before execution.
- **[GAWG Build](https://github.com/alvarogarciapiz/gawg-build)**: Manages the build process of the created workflow.
- **[GAWG Quality](https://github.com/alvarogarciapiz/gawg-quality)**: Analizes the project with Sonar Cloud.
- **[GAWG Deploy](https://github.com/alvarogarciapiz/gawg-deploy)**: Manages the deployment process of the created workflow.
- **[GAWG Release](https://github.com/alvarogarciapiz/gawg-release)**: Creates a TAG and a Release inside the GitHub repository.
- **[GAWG Notify](https://github.com/alvarogarciapiz/gawg-notify)**: Notifies about the workflow execution to discord, slack, MS Teams...
- **[GAWG Test](https://github.com/alvarogarciapiz/gawg-test)**: Manages the testing process of the created workflow.


Feel free to explore these repositories and contribute to the areas that interest you the most.

## How to Contribute

### 1. Reporting Bugs or Suggesting Features

- If you've found a bug or have an idea for a new feature for the website, please open an issue on this repository.
- For issues or feature requests related to the core functionality (actions, workflows, integrations), please locate the appropriate repository and open an issue there.

### 2. Pull Requests

- Fork this repository and clone it to your local machine.
- Create a new branch for your changes: `git checkout -b feature/your-feature`.
- Make your changes, ensuring they follow our [coding guidelines](#coding-guidelines).
- Commit your changes and push them to your fork.
- Submit a pull request to this repository for review.

For contributions to other linked repositories, please follow the respective guidelines provided in those repositories.

### 3. Coding Guidelines

- Please ensure your code is clean and well-documented.
- Follow the existing code style used in the repository.
- Write clear and concise commit messages.

## Getting Started

To set up the website locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-org/gawg-website.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```

## Questions or Help

If you need help or have questions regarding the GAWG platform, feel free to reach out by opening an issue or contacting us via [email](mailto:gawg@lvrpiz.com).

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat everyone with respect and contribute to a welcoming and inclusive environment.

---

Thank you for your interest in contributing to GAWG! We appreciate your support and look forward to working with you.
