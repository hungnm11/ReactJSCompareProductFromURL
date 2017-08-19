import { FETCHING_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/index';

const INITIAL_STATE = {
  data: {},
  isFetching: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data:{},
        isFetching: true
      };
    case FETCH_DATA_SUCCESS: 
      return {
        ...state,
        data: action.payload,
        isFetching: false
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};