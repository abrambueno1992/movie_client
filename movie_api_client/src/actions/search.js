import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;

export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const searchMovie = search_string => {
  const options = {
    method: "GET",
    header: { "content-type": "application/json" },
    url: url + search_string
  };
  return dispatch => {
    axios(options)
      .then(response => {
        console.log("Response from the search:", response.data);

        dispatch({
          type: SEARCH_MOVIE,
          payload: response.data
        });
      })
      .catch(err => {
        console.log("ACTION FAILED: ERROR: ", err);
      });
  };
};
