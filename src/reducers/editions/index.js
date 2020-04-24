const editionsReducer = function (state = {}, action) {
    switch (action.type) {
      case "LOADING":
        return action.dispatchType === 'editions' ? {
          ...state,
          isFetching: true,
        } : state;
      case "FETCHED_EDITIONS":
        return {
          ...state,
          [action.editions.key]: action.editions.data,
          isFetching: false
        };
      default:
        return state;
    }
  };

  export default editionsReducer;