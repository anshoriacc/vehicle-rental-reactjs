import {combineReducers} from 'redux';
import authReducer from './auth';
import reservationReducer from './reservation';

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
