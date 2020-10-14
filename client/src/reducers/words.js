const initialState = {
  // isLoading: false,
  error: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WORDS':
      return {
        error: false,
        data: action.payload,
      };
    case 'SET_WORDS_ERROR':
      return {
        data: [],
        error: true,
      };
    default:
      return state;
  }
};
