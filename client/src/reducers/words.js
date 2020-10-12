const initialState = {
  isLoading: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WORDS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
