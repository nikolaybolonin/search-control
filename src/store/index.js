// vendor modules
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
// utils
import reducers from './reducers';
import rootSaga from './sagas/rootSaga';

const ReduxSaga = createSagaMiddleware();

const middlewares = [ReduxThunk, ReduxSaga];

// Add redux extention to dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(
  combineReducers(reducers),
  // preloadedState,
  enhancers,
);

ReduxSaga.run(rootSaga);

export default store;
