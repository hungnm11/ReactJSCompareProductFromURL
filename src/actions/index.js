import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL2 = `http://www.lazada.sg/apple-iphone-7-plus-128gb-jet-black-8629928.html `;
const ROOT_URL1 = `http://www.lazada.sg/telco-apple-iphone-7-plus-128gb-product-red-16801971.html`;

export const GET_URLS = 'get_urls';

export const getULR = (urls) => {

  const url1 = `${PROXY_URL + ROOT_URL1}`
  const url2 = `${PROXY_URL + ROOT_URL2}`
  console.log('URL==>', url1);
  const requestURL1  = axios.get(url1).then((response) => {
    return response;
  });

  const requestURL2  = axios.get(url2).then((response) => {
    return response;
  });
  
  Promise.all([requestURL1, requestURL2]).then(value => {
    console.log('VALUES ==>', value)
  });
  return {
    type: GET_URLS,
    payload: urls
  };
};
