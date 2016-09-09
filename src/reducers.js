const SET_SEARCH_TERM = 'setSearchTerm';

const rootReducer = (state = defaultState, action) => {

  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTermReducer(state, action);
    default:
      return state;
  }
}

const setSearchTermReducer = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchTerm: action.value});
  return newState;
}

export default rootReducer;
