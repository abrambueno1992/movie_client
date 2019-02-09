import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
export const GET_POPULAR = "GET_POPULAR";
export const getPopular = () => {
  const options = {
    method: "GET",
    header: { "content-type": "application/json" },
    url: url
  };
  return dispatch => {
    axios(options)
      .then(response => {
        dispatch({
          type: GET_POPULAR,
          payload: response
        });
      })
      .catch(err => {
        console.log("ACTION FAILED: ERROR: ", err);
      });
  };
};
