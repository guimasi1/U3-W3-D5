import { type } from "@testing-library/user-event/dist/type";

export const SET_SONG_TO_PLAY = "SET_SONG_TO_PLAY";
export const SHOW_SEARCH = "SHOW_SEARCH";
export const HIDE_SEARCH = "HIDE_SEARCH";
export const SET_SEARCH_SONGS = "SET_SEARCH_SONGS";
export const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";
export const SET_ARTIST_DATA = "SET_ARTIST_DATA";
export const SET_ARTIST_DATA_POP = "SET_ARTIST_DATA_POP";
export const SET_ARTIST_DATA_HIP_POP = "SET_ARTIST_DATA_HIP_POP";
export const SET_FAVOURITE_SONGS = "SET_FAVOURITE_SONGS";

export const setSearchFilter = (searchFilter) => ({
  type: SET_SEARCH_FILTER,
  payload: searchFilter,
});

export const showSearch = () => ({ type: SHOW_SEARCH });
export const setSearchSongs = (songs) => ({
  type: SET_SEARCH_SONGS,
  payload: songs,
});
export const setFavouriteSongs = (song) => ({
  type: SET_FAVOURITE_SONGS,
  payload: song,
});

export const setSongToPLay = (song) => ({
  type: SET_SONG_TO_PLAY,
  payload: song,
});

export const searchFetch = (searchFilter) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          searchFilter,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      dispatch(showSearch());

      if (response.ok) {
        const result = await response.json();
        const songs = result.data;
        dispatch(setSearchSongs(songs));
      } else {
        throw new Error("SOMETHING WENT WRONG");
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const setArtistData = (artistData) => ({
  type: SET_ARTIST_DATA,
  payload: artistData,
});
export const handleSectionAction = (artistName) => {
  console.log("ok");
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        console.log(data, "dati dell'artista");
        dispatch(setArtistData(data.slice(0, 4)));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const setArtistDataPop = (artistDataPop) => ({
  type: SET_ARTIST_DATA_POP,
  payload: artistDataPop,
});

export const handleSectionActionPop = (artistNamePop) => {
  console.log("ok");
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistNamePop,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        console.log(data, "dati dell'artista");
        dispatch(setArtistDataPop(data.slice(0, 4)));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const setArtistDataHipPop = (artistDataHipPop) => ({
  type: SET_ARTIST_DATA_HIP_POP,
  payload: artistDataHipPop,
});

export const handleSectionActionHipPop = (artistNameHipPop) => {
  console.log("ok");
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistNameHipPop,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        const { data } = await response.json();
        console.log(data, "dati dell'artista");
        dispatch(setArtistDataHipPop(data.slice(0, 4)));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
