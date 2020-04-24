const detailReducer = function(state = {}, action) {
  switch (action.type) {
    case "LOADING":
      return action.dispatchType === 'detail' ? {
        ...state,
        isFetching: true,
      } : state;
    case 'FETCHED_DETAIL':
      return {
        ...state,
        [action.detail.key]: action.detail.data,
		    isFetching: false
      };
    default:
      return state;
  }
};

export default detailReducer;
