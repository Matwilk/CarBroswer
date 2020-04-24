const transformMake = (acc, make) => {
    acc[make.sourceId] = make;
    return acc;
}

const makesReducer = function (state = {}, action) {
  switch (action.type) {
    case "LOADING":
      return action.dispatchType === 'makes' ? {
        ...state,
        isFetching: true,
      } : state;
    case "FETCHED_MAKES":
      return { 
        makes: action.makes.data.reduce(transformMake, {}),
        isFetching: false
      };
    default:
      return state;
  }
};

  export default makesReducer;