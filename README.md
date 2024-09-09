# Template Package

This repository provides a template for building a JavaScript/TypeScript package. Follow the instructions below to set up, develop, test, build, and publish your package.

## Getting Started

### 1. Install Dependencies

To get started, clone the repository and install the necessary dependencies:

```bash
npm install
```

### 2. Develop Your Module

- The main logic of your module should be placed in the `src` folder. Ensure that your code is written as an ES module.
- Make sure to add TypeScript definitions for your functions to enable auto-suggestions and type checking when the module is used.

### 3. Testing Your Module

- Create your test scripts using Jest and place them in the `tests` directory.
- To run the tests and verify that all functions and methods work correctly, execute:

```bash
npm test
```

### 4. Bundling Your Module

If all tests pass and the module works as expected, you can proceed to build the package:

```bash
npm run build
```

This command will generate a minified version of your code and the corresponding TypeScript definitions in the `dist` directory.

### 5. Publishing to npm

Once your package is built, you can publish it to npm:

1. First, log in to your npm account using the legacy authentication method:

```bash
npm login --auth-type=legacy
```

2. Then, publish the package:

```bash
npm publish
```

## Project Structure

```
.
├── jest.config.js
├── package-lock.json
├── package.json
├── rollup.config.js
├── src
│   ├── HelloWorld.d.ts
│   ├── HelloWorld.js
│   ├── index.d.ts
│   └── index.js
├── tests
│   └── HelloWorld.test.js
└── tsconfig.json
```

- `src/`: Contains the source code and TypeScript definitions
- `tests/`: Contains Jest test files
- `jest.config.js`: Configuration for Jest testing framework
- `rollup.config.js`: Configuration for Rollup bundler
- `tsconfig.json`: TypeScript compiler configuration

## Scripts

- `npm test`: Run Jest tests
- `npm run build`: Build the package using Rollup
- `npm run clean` (if available): Clean the dist directory