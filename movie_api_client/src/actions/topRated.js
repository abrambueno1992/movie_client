import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;

export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_TOP_RATED_REQUEST = "GET_TOP_RATED_REQUEST";

function fetchTodosRequest() {
  return {
    type: GET_TOP_RATED_REQUEST
  };
}

function fetchTodosSuccess(body) {
  console.log("body:", body);
  return {
    type: GET_TOP_RATED,
    payload: body
  };
}
function fetchTodosFailure(ex) {
  return {
    type: "FETCH_TODOS_FAILURE",
    ex
  };
}

export const getTopRated = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return fetch(url)
      .then(res => res.json())
      .then(body => dispatch(fetchTodosSuccess(body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)));
  };
};
