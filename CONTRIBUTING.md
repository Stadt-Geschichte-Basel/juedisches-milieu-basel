# Contributing to Das Jüdische Basel Puzzle App

Thank you for your interest in contributing to this project! We welcome contributions from the community.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)
- [Testing](#testing)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/issues) to see if the issue has already been reported.

When reporting a bug, please include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (browser, OS, device)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- A clear and descriptive title
- A detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Pull Requests

We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs or functionality, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue the pull request

## Development Setup

### Prerequisites

- Node.js (version 18.x or higher)
- npm (comes with Node.js)
- Git

### Project Architecture

The application is built using **Stencil.js** web components with the following structure:

- **Component Types**:
  - `app-*` - Shared UI components (header, footer, dialogs, etc.)
  - `page-*` - Page components for different routes
  - `page-teil-*` - Individual puzzle piece pages (1-12)

- **Key Directories**:
  - `src/components/` - All Stencil web components
  - `src/global/` - Global styles, scripts, and state management
  - `src/assets/` - Static assets (images, fonts, data files)
  - `www/` - Production build output

- **State Management**: Uses `@stencil/store` for application state
- **Routing**: Stencil Router for page navigation
- **Storage**: `@ionic/storage` for persisting user progress

### Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel.git
cd juedisches-milieu-basel
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

The application will be available at `http://localhost:3333`

4. **Run tests**

```bash
npm test
```

## Pull Request Process

1. **Update documentation**: Ensure any new features or changes are reflected in the README.md and other relevant documentation
2. **Add tests**: Include appropriate test coverage for your changes
3. **Follow coding standards**: Ensure your code follows the project's coding style
4. **Update the CHANGELOG**: Add a note about your changes under the "Unreleased" section
5. **Request review**: Once your PR is ready, request a review from maintainers
6. **Address feedback**: Be responsive to review comments and make necessary changes

## Coding Standards

This project uses:

- **TypeScript** for type safety
- **Stencil.js** for web component development
- **Prettier** for code formatting (see `.prettierrc.json`)
- **EditorConfig** for consistent coding styles (see `.editorconfig`)

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multi-line objects and arrays
- Keep line length under 120 characters
- Use meaningful variable and function names

### TypeScript Guidelines

- Always define types for function parameters and return values
- Avoid using `any` type; use `unknown` if necessary
- Use interfaces for object shapes
- Leverage TypeScript's type inference where appropriate

## Commit Messages

Follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when relevant
- Use conventional commit format when applicable:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `test:` for adding or updating tests
  - `chore:` for maintenance tasks

Example:
```
feat: add new puzzle piece animation

- Implement smooth transition for puzzle pieces
- Add fade-in effect for revealed content
- Update animation timing for better UX

Closes #123
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test.watch
```

### Writing Tests

- Write unit tests for components and utilities
- Write E2E tests for critical user flows
- Ensure tests are descriptive and cover edge cases
- Mock external dependencies appropriately

## Building and Deployment

### Local Build

```bash
npm run build
```

The production build will be available in the `www/` directory.

### Docker Build

```bash
docker build -t juedisches-basel-app .
docker run -d -p 8080:8080 --name jb-app juedisches-basel-app
```

## Development Tips

### Component Development

- Each Stencil component has its own directory with `.tsx` (component logic) and `.css` (styles) files
- Use TypeScript for type safety
- Follow the existing component structure when creating new components
- Test components in isolation when possible

### Debugging

- Use browser DevTools for debugging in the browser
- Check the console for Stencil build warnings and errors
- Use `console.log()` or browser debugger breakpoints in component methods
- The development server supports hot reloading for faster iteration

### Performance

- Stencil automatically optimizes components with lazy loading
- Use `@Prop()` for component inputs and `@State()` for internal state
- Minimize re-renders by using `@Watch()` decorators appropriately
- The build process includes prerendering for better initial load performance

### Working with Data

- Historical content is stored in the `src/assets/` directory
- User progress is persisted using `@ionic/storage`
- State management is handled via `src/global/store.ts`

## Questions?

If you have questions or need help, please:

1. Check the [readme.md](readme.md) for basic information
2. Search existing [issues](https://github.com/Stadt-Geschichte-Basel/juedisches-milieu-basel/issues)
3. Create a new issue with the `question` label

## License

By contributing to this project, you agree that your contributions will be licensed under:

- **Code**: MIT License (see [LICENSE](LICENSE))
- **Content & Data**: CC BY 4.0 (see [LICENSE-CCBY.md](LICENSE-CCBY.md))

---

Thank you for contributing! 🎉
