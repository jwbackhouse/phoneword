import { configureStore } from '@reduxjs/toolkit';
import wordsReducer from '../reducers/words.js';

export default configureStore({
  reducer: {
    words: wordsReducer,
  },
});
