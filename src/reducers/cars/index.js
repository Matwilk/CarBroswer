const carsReducer = function (state = {}, action) {
  switch (action.type) {
    case "LOADING":
      return action.dispatchType === 'cars' ? {
        ...state,
        isFetching: true,
      } : state
    case "FETCHED_CARS":
      return {
        ...state,
        [action.cars.key]: action.cars.data,
        isFetching: false
      };
    default:
      return state;
  }
};

  export default carsReducer;