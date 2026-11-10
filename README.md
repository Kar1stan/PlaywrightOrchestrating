# Playwright Orchestrating

This project contains a Playwright end-to-end test suite for validating the ASOS header experience. It uses the Playwright Test framework and a simple Page Object Model to interact with the site and verify navigation and search behavior.

## What it tests

The suite covers core header flows such as:

- opening the Women and Men category links
- submitting a search query from the header
- opening the account menu
- visiting saved items
- opening the shopping bag

## Prerequisites

- Node.js 18+ (or a current LTS version)
- npm

## Install dependencies

To install all necesary dependencies run command in the terminal:

```
npm install
```

If you are setting up the project for the first time, install the Playwright browser binaries as well:

```
npx playwright install --with-deps
```

## Run the tests

The project includes a test script defined in `package.json`:

```
npm test
```

This runs the ASOS header spec in Chromium with a single worker and headed mode. *Take in mind tests only work in headed mode,since site refuses to connect otherwise*

## Project structure

```text
PlaywrightOrchestrating/
├── README.md
├── package.json
├── tests/
│   ├── e2e/
│   │   └── header/
│   │       └── header.spec.ts
│   └── pages/
│       └── asos-header.page.ts
└── package-lock.json
```

## Notes

- The test suite is designed for browser automation and UI verification.
- The default test command uses headed Chromium for easier debugging.
- You can add more test files under `tests/` as the suite grows.
