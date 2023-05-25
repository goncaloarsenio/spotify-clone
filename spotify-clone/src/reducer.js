export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //turn token back to null after develoing, this is just for debugging
/*   token:
    "BQDKMjiY3GjdxdtDLSP9C4HBXqx9sWC2TtqOrH9w7n2TEMG4QlvAJGhFM3g6uwJ57_dSSBnUKIvLcj5sr9yFNwj3JYFV7OYxzE-cxxSwFJYIKerezi2ZpligKDfeni9IYdiL3OK_BFZW1m0raI_2weGGnEq3CNfLScxLmmj-VJMrGJncqeVmeD6IJfyuHwhnCga8nda9d5MsJPUZzXCbBcxG", */
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

    default:
      return state;
  }
};

export default reducer;
