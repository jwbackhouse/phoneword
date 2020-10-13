export const setWords = result => ({
  type: 'SET_WORDS',
  payload: result,
});

export const setWordsError = () => ({
  type: 'SET_WORDS_ERROR',
});
