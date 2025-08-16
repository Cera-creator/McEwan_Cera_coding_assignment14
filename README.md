# Cera McEwan - Portfolio Website

### Prerequisites

1. Docker Desktop
2. VSCode

## Using Docker

1. **Clone the repository**:

   ```
   git clone https://github.com/Cera-creator/McEwan_Cera_coding_assignment14.git
   cd McEwan_Cera_coding_assignment13/component_library/McEwan_Cera_portfolio
   ```

   **Note:** The portfolio is located inside the component library directory to share the same testing infrastructure and dependencies.

2. **Build the Docker image**:

   ```
   docker build -t mcewan_cera_portfolio .
   ```

3. **Run the container**:

   ```
   docker run -d -p 5575:5575 --name McEwan_Cera_coding_assignment14 mcewan_cera_portfolio
   ```

4. **Access the application**:
   Open your browser and navigate to: `http://localhost:5575`

## Development

### Available Scripts

```
# Development
npm run dev          # Start development server
npm run build        # Build for production

# Code Quality
npx prettier --write . # Prettier
npm run lint           # ESLint
npm test               # Tests

# Production build
npm run build

# Git Hooks (automatic)
# - Pre-commit: Runs linting, prettier, and tests
```

## Component Library Integration

This portfolio uses custom components from the component library:

- **Button** - Styled button component with hover effects
- **Card** - Professional card layout with shadows and transitions
- **Text** - Styled text component with background options

## Portfolio Sections

### Basic Information

- Name
- Contact Information
- Short Intro

### Work/Projects

- Title
- Description
- Images
- Link to GitHub Repository
- Technology used

### Skills

- Description
- Languages and Frameworks
- Development tools

### Resources

- Title
- Image/Icon
- Summary
- Link
