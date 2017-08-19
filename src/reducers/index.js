import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getUrlReducer from './getUrlReducer';

const rootReducer = combineReducers({
  urls: getUrlReducer,
  form: formReducer
});

export default rootReducer;
