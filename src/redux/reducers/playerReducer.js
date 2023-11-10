import { SET_SONG_TO_PLAY } from "../actions/actions";
const initialState = {
  song: "",
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONG_TO_PLAY:
      return {
        ...state,
        song: action.payload,
      };

    default:
      return state;
  }
};

export default playerReducer;
