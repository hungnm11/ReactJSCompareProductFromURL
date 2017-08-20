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

export const getDataSuccess = (data1, data2) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      page1: data1,
      page2: data2
    }
  }
};

export const getDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
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
        const page1 = parseContent(data[0].data);
        const page2 = parseContent(data[1].data);
        // const div = document.createElement('div');
        // div.innerHTML = page1;
        // const elements = div.childNodes;
        // const notes = div.getElementsByClassName('prod_header_title')[0].innerHTML;
        // console.log('nodeArray', notes)
        // console.log('ARRAY', elements)
        dispatch(getDataSuccess(page1, page2))
      })
      .catch(err => {
        console.log('ERROR', err);
        dispatch(getDataFailure(err))
      })
  }
};


export const parseContent = (page) => {
  const div = document.createElement('div');
  div.innerHTML = page;
  const elements = div.childNodes;
  const titleProduct = div.querySelector('h1#prod_title').textContent;
  const imageProduct = div.querySelector('div.productImage').dataset.big;
  const price = div.getElementsByClassName('prod_pricebox')[0].innerHTML;
  const specifications = div.getElementsByClassName('product-description__block')[0].innerHTML;
  const notes = div.getElementsByClassName('l-pageWrapper')[0].innerHTML;
  console.log('nodeArray', {
    titleProduct,
    imageProduct,
    price,
    specifications
  })
  return notes;
  
};