import reducers from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { changeSearchText } from './actions/index';
import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(
  reducers,
  enhancer,

);

store.dispatch(changeSearchText('search by address, city, or zip'));


export default store;
