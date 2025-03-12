# Getting Started with Create React App - Prerequisites

Node.js (v14 or later)

npm or yarn

# Repo Cloning  and npm Install

git clone https://github.com/udayakumar9779/coding-assessment.git

cd coding-assessment

npm install [OR] yarn install

## npm available scripts

### `npm start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint`

Linting: ESLint is configured to enforce best practices and avoid common errors.

## 'npm run format'

Formatting: Prettier is used to ensure a consistent code style.

## 'git commit -m "Husky Testing'

HUSKY enforce coding standards, run tests, or execute other scripts before committing or pushing code.


## Design Choices - Technologies Used ##

React (Functional Components + Hooks)

CSS (Inline styles for simplicity)

JavaScript (ES6+ syntax)

ESLint (Enforcing code style and best practices)

Prettier (Automatic code formatting)

Code Quality & Formatting


*** Component-Based Architecture ***

The structured into reusable components, such as:

Heading.tsx
Paragraph.tsx
Tabs.tsx
TabPage.tsx

*** TypeScript for Type Safety ****

Using React.FC<T> to define functional components ensures better IntelliSense, autocompletion, and fewer runtime errors.
useState<number> ensures the activeTab state is always a number, preventing unwanted bugs.

*** State Management with useState ***

The TabPage.tsx component manages the active tab using useState, making it responsive to user interaction.
Props (activeTab, setActiveTab) are passed to Tabs.tsx, promoting unidirectional data flow.

*** Centralized Data Storage (tabData & pageContent) ***

Data is separated into constants (tabData.ts, data.ts) instead of hardcoding inside components.
This allows for easier updates and scalability.

*** CSS Modules for Scoped Styling (TabPage.css) *** 

Each component has its own CSS file to prevent style conflicts.

The class names (tab-panel-container, tab-panel-title) suggest a BEM-like structure, improving maintainability.

*** Jest & React Testing Library for Testing ***

Tests verify component behavior, such as:
Default rendering (renders TabPage correctly)
UI updates on interaction (changes content when a tab is clicked)
Uses fireEvent to simulate user interactions.

*** App Structure & Reusability (App.tsx) ***

App.tsx acts as the entry point, only rendering TabPage.tsx, making it easy to swap or extend pages later.