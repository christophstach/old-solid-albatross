import { combineReducers } from 'redux';
import {reducers as noteReducers} from './components/Note';


const reducers = combineReducers(
  {
    ...noteReducers
  }
);

export default reducers;