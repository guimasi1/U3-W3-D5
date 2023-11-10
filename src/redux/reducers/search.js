import {
  SET_SEARCH_FILTER,
  SET_SEARCH_SONGS,
  SHOW_SEARCH,
  SET_ARTIST_DATA,
  SET_ARTIST_DATA_POP,
  SET_ARTIST_DATA_HIP_POP,
  SET_FAVOURITE_SONGS,
} from "../actions/actions";
const initialState = {
  searchFilter: "",
  showSearch: false,
  songs: [],
  artistData: [],
  artistDataPop: [],
  artistDataHipPop: [],
  favouriteSongs: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchFilter: action.payload,
      };
    case SET_SEARCH_SONGS:
      return {
        ...state,
        songs: [...state.songs, ...action.payload],
      };
    case SHOW_SEARCH:
      return {
        ...state,
        showSearch: true,
      };
    case SET_ARTIST_DATA:
      return {
        ...state,
        artistData: action.payload,
      };
    case SET_ARTIST_DATA_POP:
      return {
        ...state,
        artistDataPop: action.payload,
      };
    case SET_ARTIST_DATA_HIP_POP:
      return {
        ...state,
        artistDataHipPop: action.payload,
      };
    case SET_FAVOURITE_SONGS:
      return {
        ...state,
        favouriteSongs: [...state.favouriteSongs, action.payload],
      };

    default:
      return state;
  }
};

export default searchReducer;
