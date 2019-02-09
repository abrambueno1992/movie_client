import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;

export const GET_TOP_RATED = "GET_TOP_RATED";
export const getTopRated = () => {
  const options = {
    method: "GET",
    header: { "content-type": "application/json" },
    url: url
  };
  return dispatch => {
    axios(options)
      .then(response => {
        dispatch({
          type: GET_TOP_RATED,
          payload: response
        });
      })
      .catch(err => {
        console.log("ACTION FAILED: ERROR: ", err);
      });
  };
};
