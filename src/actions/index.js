import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL2 = `http://www.lazada.sg/apple-iphone-7-plus-128gb-jet-black-8629928.html `;
const ROOT_URL1 = `http://www.lazada.sg/telco-apple-iphone-7-plus-128gb-product-red-16801971.html`;

export const GET_URLS = 'get_urls';
export const FETCHING_DATA = 'fetching_data';
export const FETCH_DATA_SUCCESS = 'fetch_data_success';
export const FETCH_DATA_FAILURE = 'fetch_data_failure';

export const getData = () => {
  return {
    type: FETCHING_DATA
  };
};

export const getDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
};

export const getDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload, error
  }
};

export const getULR = (urls) => {

  const url1 = `${PROXY_URL + ROOT_URL1}`
  const url2 = `${PROXY_URL + ROOT_URL2}`
  const requestURL1  = axios.get(url1).then((response) => {
    return response;
  });

  const requestURL2  = axios.get(url2).then((response) => {
    return response;
  });
  
  return (dispatch) => {
    dispatch(getData())
    Promise.all([requestURL1, requestURL2])
      .then(data => {
        dispatch(getDataSuccess(data))
      })
      .catch(err => {
        console.log('ERROR', err);
        dispatch(getDataFailure(err))
      })
  }
};
