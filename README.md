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