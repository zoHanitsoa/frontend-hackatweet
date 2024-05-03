import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: { nbTweets: 0},
};




export const tweetsSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    addTweet: (state, action) => {
      console.log('all tweets')
      state.value.nbTweets = state.value.nbTweets +1;
    },

    setInitialNbTweets: (state, action) => {
        state.value.nbTweets = action.payload.nbTweets;
    }, 

    removeTweet: (state, action) => {
        console.log('all tweets')
        state.value.nbTweets = state.value.nbTweets -1;
      },

   
  },
});

export const { addTweet, setInitialNbTweets, removeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
