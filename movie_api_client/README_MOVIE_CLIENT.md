This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

This is a movie client using The Movie Database (TMDb) API. This movie client fetches movie data from four selections: now playing, popular, top rated, and results from a movie search. When the application launches, it displays movies from the selection that are now playing. The navigation bar at top has links to redirect to different selections such as top rated movies, popular movies, now playing (default when the application starts) and a search bar (for any movie). This application uses React Router to redirect to different components, uses Redux for state management of the application, and uses Jest with Enzyme for testing components and redux actions. This application requires an API key provided by The Movie Database for requests with their API. The API key needs to be saved in a .env file with the variable name of REACT_APP_API_KEY. To sign up for an account go to: [https://www.themoviedb.org/account/signup](https://www.themoviedb.org/account/signup)

## Starting the Application

Once the API key is in the .env file, run `yarn` or `npm install` at the same level as the package.json file, which is visible with the `ls` command. After installing all dependencies, run `yarn start` or `npm start` to start the application. To test the application, run `yarn test` or `npm test`.

## Components logic

Redirects between components happen with the use of React Router, and it's through a Navigation component inside of all the different routes. At the root "/", you can redirect to any other route with the links in the Navigation component, which will cause a different component to mount. The Navigation component is a component that's constant, is the same in all different links, `popular`, `top rated`, and now `playing`.

There are three main files that deal with the setup of the application such as the redux store, react router, and regular React setup. Root.js (at the root of src/) does the setup for the redux store, index.js (at the root of src/) does the React setup for the ReactDOM, and App.js (at the root of components/) does the React Router setup for the components.
<br>
<br>
The component located at the root path "/" is the NowPlaying component, which launches the redux action to dispatch and return the data for the NowPlaying component through the now_playing props. Action dispatched is getNowPlaying();
<br>
<br>
The component located at path "/popular" is the Popular component, which launches the redux action to dispatch and return the data for the Popular component through the popular props. Action dispatched is getPopular();
<br>
<br>
The component located at path "/top-rated" is the TopRated component, which launches the redux action to dispatch and return the data for the TopRated component through the top_rated props. Action dispatched is getTopRated();
<br>
<br>
The component located at path "/search/:query" is the Search component, which uses the search query that was submitted from the input. The input for the search is located at the Navigation component. The Navigation component launches the actions to dispatch and return the state to the redux store. After launching the action to dispatch, it's redirected to "/search/:query" to render the Search component with the proper data; the query is the input string that was submitted. Action dispatched searchMovie(searchString);
<br>
<br>
The Navigation component doesn't have a path because it's used in all components: it's located inside of NowPlaying, Popular, TopRated, Search, and DisplaySelection. The Navigation component is used in all components, and requires a value prop and history prop to be passed into the Navigation component. The props are from the parent component, such as the NowPlayingComponent, or any other.
<br>
<br>
Each of the three components (at path "/", "/popular", "/top-rated") have the ability to click on a movie to have see more details about the movie. When the user makes a selection, they will be redirected to the DisplaySelection component. There are four possible redirects to the Display component depending on the current selection: at "/" it's redirected to "/now-playing/:id", at "/popular" it's redirected to "/popular/:id", at "/top-rated" it's redirected to "/top-rated/:id", and at "/search/:query" it's redirected to "/search/:query/result/:id". All of these redirects render the DisplayComponent with the proper data.
<br>
<br>

## Redux Actions, State, and tests

The redux store initial state is the following, default is null:

```
    now_playing: null,  <--- redux store state used in NowPlaying component
    top_rated: null, <--- redux store state used in TopRated component
    popular: null,  <--- redux store state used in Popular component
    search: null,   <--- redux store state used in Search component
```

The redux store state is populated with data after the following actions are dispatched. Each of these actions are dipatched inside of the components that need the data, and they're only dispatched if there's no data (null).

```
getNowPlaying() <--- returns dispatch of data for the now_playing state
getPopular()    <--- returns dispatch of data for the popular state
getTopRated()   <--- returns dispatch of data for the top_rated state
searchMovie(searchString)   <--- returns dispatch of data for the search state
```
