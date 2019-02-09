import { GET_NOW_PLAYING } from "../actions/nowPlaying";
import { GET_TOP_RATED } from "../actions/topRated";
import { GET_POPULAR } from "../actions/popular";
const initialState = {
  now_playing: {},
  top_rated: {},
  popular: {}
};
const movieState = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return Object.assign({}, state, {
        now_playing: action.payload
      });
      break;
    case GET_TOP_RATED:
      return Object.assign({}, state, {
        top_rated: action.payload
      });
      break;
    case GET_POPULAR:
      return Object.assign({}, state, {
        popular: action.payload
      });
      break;
    default:
      return state;
      break;
  }
};

export default movieState;
