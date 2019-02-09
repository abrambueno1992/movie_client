import axios from "axios";

export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const CHOOSE_MOVIE = "CHOOSE_MOVIE";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;

export const getNowPlaying = () => {
  const options = {
    method: "GET",
    header: { "content-type": "application/json" },
    url: url
  };
  return dispatch => {
    axios(options)
      .then(response => {
        dispatch({
          type: GET_NOW_PLAYING,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("ACTION FAILED: ERROR: ", err);
      });
  };
};

export const movieDetailsNP = index => {
  return dispatch => {
    dispatch({
      type: CHOOSE_MOVIE,
      payload: index
    });
  };
};
