import { GET_NOW_PLAYING, CHOOSE_MOVIE } from "../actions/nowPlaying";
import { GET_TOP_RATED } from "../actions/topRated";
import { GET_POPULAR } from "../actions/popular";
const initialState = {
  now_playing: {},
  top_rated: {},
  popular: {},
  movie_index: 0
};
const movieState = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return Object.assign({}, state, {
        now_playing: action.payload
      });
      break;
    case CHOOSE_MOVIE:
      return Object.assign({}, state, {
        movie_index: action.payload
      });
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
