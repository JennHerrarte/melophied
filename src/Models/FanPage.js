import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

class FanPage {
  /* get all fanPages */
  static all = () => {
    return axios.get( `${BASE_URL}/melohpied/fanpage/all`);
  }

  /* get top five fanPages */
  static topFive = () => {
    return axios.get( `${BASE_URL}/melohpied/fanpage/topfive`);
  }

  /* get one fanPage */
  static show = ( pageId ) => {
    return axios.get(`${BASE_URL}/melohpied/fanpage/show/${pageId}`);
  }

  /* create fanPage */
  static create = ( pageData, userToken ) => {
    return axios.post(`${BASE_URL}/melohpied/fanpage/create`, pageData, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } );
  }

  /* update fanPage */
  static update = ( pageId, pageData, userToken ) => {
    return axios.put(`${BASE_URL}/melohpied/fanpage/${pageId}/update`, pageData, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } );
  }

  /* delete fanPage */
  static delete = ( pageId, userToken ) => {
    return axios.delete(`${BASE_URL}/melohpied/fanpage/${pageId}/delete`, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
  }
}

export default FanPage;