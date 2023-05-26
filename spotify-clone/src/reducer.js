export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  discover_weekly: null,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  //Action has 2 things: type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    //get data from spotiify to show playlists +app.js
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    /*   case "SET_SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        }; */

    default:
      return state;
  }
};

export default reducer;
