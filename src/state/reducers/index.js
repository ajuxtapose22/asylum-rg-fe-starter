import { combineReducers } from 'redux';
import vizReducer from './vizReducer';
import fetchFilterReducer from './fetchFilterReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  vizReducer,
  fetchFilterReducer,
  dataReducer,
});


