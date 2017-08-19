export const GET_URLS = 'get_urls';

export const getULR = (urls) => {
  console.log('ihfiehwoiefo===>', urls);
  return {
    type: GET_URLS,
    payload: urls
  }
};