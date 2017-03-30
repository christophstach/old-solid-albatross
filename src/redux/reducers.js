import { combineReducers } from 'redux';
import notes from '../components/Note/reducer';


const reducers = combineReducers({
  notes
});

export default reducers;