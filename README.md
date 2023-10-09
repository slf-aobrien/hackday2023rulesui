# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Creation:
```
npm create vite@latest
```

# Storybook creation:
```
npm install @storybook/builder-vite --save-dev
npx storybook@latest init
```

# Run the UI:
```
npm run dev
```

# Run Storybook
Storybook is used for component testing more info can be found at their [website](https://storybook.js.org/docs/react/get-started/install/)
```
npm run storybook
```

# Adding Material UI
```
npm install @mui/material @emotion/react @emotion/styled
```

# Unit Testing
Projects created with Vite don't have testing setup by default.  I found this [website](https://www.robinwieruch.de/vitest-react-testing-library/) to set this up:
Run the following command to bring the library into our project
```
npm install vitest --save-dev
npm install jsdom --save-dev
npm install @testing-library/react @testing-library/jest-dom --save-dev
```
Update the package.json file:
Currently it looks like this:
```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
```
We need to configure a test script so add this line somwhere (I like after build)
```
    "test": "vitest",
```
Run with this command:
```
npm run test
```
## Notes
Test files need to have the same extension as the file they are testing [Stack Overflow](https://stackoverflow.com/questions/74970340/vitest-with-react-testing-library-unexpected-token )

[Useful walk through](https://www.robinwieruch.de/react-testing-library/) of the vite testing library