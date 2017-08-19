import { GET_URLS } from '../actions/index';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_URLS:
      return action.payload;
    default:
      return state;
  }
};