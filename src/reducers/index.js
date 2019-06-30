import { combineReducers } from "redux";
export const songsReducer = () => {
  return [
    {
      title: "title 1",
      duration: "3.15"
    },
    {
      title: "title 2",
      duration: "4:20"
    },
    { title: "title 3", duration: "3:30" },
    {
      title: "title 4",
      duration: "4:15"
    }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
