# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Prerequisites

Ensure that you have the following installed on your system:

* Node.js (version 14.x or higher)
* npm or yarn (the default package manager for Vite is npm, but yarn or pnpm can be used as well)
* Git (for version control)

## Project Structure

After setting up the project, the typical structure should look like this:

```
front_end_web/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # Static assets (images, font, etc.)
│   ├── components/        # Reusable components (such as button, input, menu etc...)
│   ├── App.tsx            # Root component (all the routes)
│   ├── main.tsx           # Entry point of the application
│   ├── global-variables.scss  # Global CSS varaibles such as for colors, initialization of fonts
│   └──main.scss	   # Global CSS like for fontfamily and fontsizes
├── .eslintrc.cjs          # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── package.json           # Project metadata and dependencies
└── README.md
```



## Execution of the front-end

First of all, you need to download all the packages by using the following command:

```
npm install
```

Once the packages are prepared, you can execute the program directly:

```
npm run dev
```

You can find all routes in the App.tsx, for example: http://localhost:5173/login, http://localhost:5173/signup etc

## Environment Variables

Vite uses `.env` files for environment variables. You can create the following files:

* **.env** : Default environment variables. (you can find the .env example file from .env-dist)

