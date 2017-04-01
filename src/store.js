import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { loadState, saveState } from './localStorage';
import reducer from './reducers';

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  applyMiddleware(logger)
);

store.subscribe(() => {
  console.log(store.getState());
  saveState(store.getState());
});


export default store;