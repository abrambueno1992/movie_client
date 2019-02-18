This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This is a movie client using The Movie Database (TMDb) API. This movie client fetches movie data from four selections: now playing, popular, top rated, and results from a movie search. When the application launches, it displays movies from the selection that are now playing. The navigation bar at top has links to redirect to different selections such as top rated movies, popular movies, now playing (default when the application starts) and a search bar (for any movie). This application uses React Router to redirect to different components, uses Redux for state management of the application, and uses Jest with Enzyme for testing components and redux actions. This application requires an API key provided by The Movie Database to do requests with their API. The API key needs to be saved in a .env file with the variable name of REACT_APP_API_KEY. To sign up for an account go to: [https://www.themoviedb.org/account/signup](https://www.themoviedb.org/account/signup)

## Components logic and tests

## Redux Actions, State, and tests

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
