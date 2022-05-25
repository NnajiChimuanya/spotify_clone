## Functionality :

1) Created the endpoint for user authorization and authentication.
2) spotify-web-api-js is installed using npm, and initialized and set to spotify
3) Wrapped the App component in the index.js in a DatalayerContext which is used for globall state management.
4) Created a reducer.js file which contained the initialState{which contains the user, playlist, playing, item, token} and reducer function
5) In the index.js, initialState is accessed by importing from the reducer.js file and then passed as the value to the DataLayerContext
6) In the App.js, the initialState is destuctured : {user, token_ } and set to the useContext(DataLayerContext)
7) In the App.js, the useReducer hook is imported and initialized thus : const [state, dispatch] = useReducer(reducer, {user, token_})
8) Now, using the dispatch function that has a listener in the reducer function , the user is set using the spotify.getMe(user => {...} ), also the token_ is set and stored in the state which is globally accessible
9) Now, the spotify is passed as prop to the Playlist component.
