export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_NOW_PLAYING_REQUEST = "GET_NOW_PLAYING_REQUEST";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;

function fetchTodosRequest() {
  return {
    type: GET_NOW_PLAYING_REQUEST
  };
}

function fetchTodosSuccess(body) {
  return {
    type: GET_NOW_PLAYING,
    payload: body
  };
}
function fetchTodosFailure(ex) {
  return {
    type: "FETCH_TODOS_FAILURE",
    ex
  };
}

export const getNowPlaying = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return fetch(url)
      .then(res => res.json())
      .then(body => dispatch(fetchTodosSuccess(body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)));
  };
};
