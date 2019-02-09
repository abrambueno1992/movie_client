import { GET_NOW_PLAYING } from "../actions/nowPlaying";
const initialState = {
  now_playing: {}
};
const movieState = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return Object.assign({}, state, {
        now_playing: action.payload
      });
    default:
      return state;
      break;
  }
};

export default movieState;
