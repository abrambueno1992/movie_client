import axios from "axios";
import "cross-fetch/polyfill";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SEARCH_MOVIE_REQUEST = "SEARCH_MOVIE_REQUEST";

function fetchTodosRequest() {
  return {
    type: SEARCH_MOVIE_REQUEST
  };
}

function fetchTodosSuccess(body) {
  return {
    type: SEARCH_MOVIE,
    payload: body
  };
}
function fetchTodosFailure(ex) {
  return {
    type: "FETCH_TODOS_FAILURE",
    ex
  };
}

// return dispatch => {
//   return fetch('/users.json') // Some async action with promise
//     .then(() => dispatch(success()))
// };
// function fetchData() {
//   const options = {
//     method: "GET",
//     header: { "content-type": "application/json" },
//     url: url + search_string
//   };
//   return dispatch => {
//     axios(options)
//       .then(response => {
//         console.log("Response from the search:", response.data);

//         dispatch({
//           type: SEARCH_MOVIE,
//           payload: response.data
//         });
//       })
//       .catch(err => {
//         console.log("ACTION FAILED: ERROR: ", err);
//       });
//   };
// }

// export const searchMovie = search_string => {
//   const options = {
//     method: "GET",
//     header: { "content-type": "application/json" },
//     url: url + search_string
//   };
//   return dispatch => {
//     axios(options)
//       .then(response => {
//         console.log("Response from the search:", response.data);

//         dispatch({
//           type: SEARCH_MOVIE,
//           payload: response.data
//         });
//       })
//       .catch(err => {
//         console.log("ACTION FAILED: ERROR: ", err);
//       });
//   };
// };
export const searchMovie = (search_string = "") => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return fetch(url + search_string)
      .then(res => res.json())
      .then(body => dispatch(fetchTodosSuccess(body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)));
  };
};
