# Agents Frontend

This project is the frontend for the Agents application, built with a modern and robust stack including React, Vite, and TypeScript.

## Features

- **Modern Framework:** Built with the latest React 19 features.
- **Fast Development:** Vite for near-instant server start and Hot Module Replacement (HMR).
- **Type Safety:** Fully typed with TypeScript.
- **Utility-First Styling:** Styled with Tailwind CSS for rapid UI development.
- **Component-Driven:** Organized with a clear component structure and showcased with Storybook.
- **Code Quality:** Enforced code quality and style with ESLint and Prettier.
- **Standardized Commits:** Uses Commitizen and Commitlint for conventional commit messages.
- **Automated Checks:** Husky and lint-staged for running pre-commit checks.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) for icons.
- **Routing:** [React Router](https://reactrouter.com/)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest)
- **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Component Development:** [Storybook](https://storybook.js.org/)
- **Code Quality:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Git Hooks:** [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)
- **Commit Messages:** [Commitizen](http://commitizen.github.io/cz-cli/) & [Commitlint](https://commitlint.js.org/)

## Project Structure

The project follows a standard structure for React applications, with a clear separation of concerns.

```
/src
├── components/         # Shared and UI components
│   └── ui/             # Base UI elements (Button, Input, etc.)
├── lib/                # Utility functions and helpers
├── pages/              # Page components corresponding to routes
├── App.tsx             # Main App component with routing setup
└── main.tsx            # Application entry point
```

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Bun](https://bun.sh/) (or you can use `npm` or `yarn`)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd agents-frontend
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

## Available Scripts

The `package.json` file includes several scripts to help with development:

- `bun run dev`: Starts the development server with HMR at `http://localhost:5173`.
- `bun run build`: Compiles and bundles the application for production in the `dist` folder.
- `bun run preview`: Serves the production build locally to preview it.
- `bun run test`: Runs the test suite using Jest.
- `bun run test:watch`: Runs the tests in interactive watch mode.
- `bun run lint`: Lints the codebase with ESLint and attempts to fix issues.
- `bun run storybook`: Starts the Storybook server to view and develop components in isolation.
- `bun run build-storybook`: Builds a static version of the Storybook.

## Code Quality & Commits

### Linting & Formatting

This project uses **ESLint** for identifying and reporting on patterns in JavaScript/TypeScript and **Prettier** for code formatting. These are configured to run automatically on every commit.

You can also run them manually:

```bash
# Run ESLint and fix issues
bun run lint

# Format all files with Prettier
bunx prettier . --write
```

### Committing

This project enforces **Conventional Commits**. A pre-commit hook will lint and format your staged files. To create a commit, it's recommended to use the `commit` script:

```bash
bun run commit
```

This will launch an interactive prompt (Commitizen) that guides you through creating a compliant commit message. This ensures a clean and understandable commit history.
