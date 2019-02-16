import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
export const GET_POPULAR = "GET_POPULAR";
export const GET_POPULAR_REQUEST = "GET_POPULAR_REQUEST";
function fetchTodosRequest() {
  return {
    type: GET_POPULAR_REQUEST
  };
}

function fetchTodosSuccess(body) {
  return {
    type: GET_POPULAR,
    payload: body
  };
}
function fetchTodosFailure(ex) {
  return {
    type: "FETCH_TODOS_FAILURE",
    ex
  };
}

export const getPopular = () => {
  return dispatch => {
    dispatch(fetchTodosRequest());
    return fetch(url)
      .then(res => res.json())
      .then(body => dispatch(fetchTodosSuccess(body)))
      .catch(ex => dispatch(fetchTodosFailure(ex)));
  };
};

// export const getPopular = () => {
//   const options = {
//     method: "GET",
//     header: { "content-type": "application/json" },
//     url: url
//   };
//   return dispatch => {
//     axios(options)
//       .then(response => {
//         dispatch({
//           type: GET_POPULAR,
//           payload: response.data
//         });
//       })
//       .catch(err => {
//         console.log("ACTION FAILED: ERROR: ", err);
//       });
//   };
// };
