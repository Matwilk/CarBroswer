const envReducer = function(state = 'wilks-cbe', action) {
  switch (action.type) {
    case 'SET_ENV':
      const newState = action.env;
      return newState;

    default:
      return state;
  }
};

export default envReducer;
