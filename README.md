# React TodoList App

A simple TodoList application built with React, utilizing key React concepts like **JSX components**, **props**, **useState**, **useEffect**, and **localStorage**. The app allows users to add, delete, and save tasks in their browser's local storage. It is deployed using GitHub Pages.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [Deploying to GitHub Pages](#deploying-to-github-pages)
- [License](#license)

## Demo
Check out the live version here: [TodoList App](https://CodeFusion-Labs.github.io/todoList-Reactjs/)

## Features
- Add new tasks with descriptions.
- Mark tasks as completed or uncompleted.
- Delete tasks from the list.
- Save tasks to `localStorage` so they persist after refreshing the page.
- Responsive design and easy to use.

## Technologies Used
- **React**: For building the user interface.
- **JSX**: To write components.
- **useState**: To manage state within components.
- **useEffect**: To handle side effects like interacting with `localStorage`.
- **localStorage**: For persistent data storage in the browser.
- **GitHub Pages**: For deployment.

## Deploying to GitHub Pages

To deploy this React app on GitHub Pages, follow these steps:

1. **Install `gh-pages`:**

   ```bash
   npm install gh-pages --save-dev

Update package.json:

 ##### Add the following "homepage" field:

json
Copier le code
"homepage": "https://CodeFusion-Labs.github.io/todoList-Reactjs"
##### Add the deploy script:

     ```json
     //Copier le code
    "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
##### Update Vite Config: In vite.config.js, add the following to set the base path:
  
    ```javascript
     Copier le code
     base: '/todoList-Reactjs/',
     Deploy the app:

     ```bash
    Copier le code
    npm run deploy
    After running this command, your app will be deployed and accessible at:
    https://CodeFusion-Labs.github.io/todoList-Reactjs/




