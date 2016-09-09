import { createStore, compose } from 'redux';

import rootReducer from './reducers';

const defaultState = {
  searchTerm: ''
};

const store = createStore(rootReducer, defaultState, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store;
