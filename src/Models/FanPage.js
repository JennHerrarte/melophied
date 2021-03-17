import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:3005'

class FanPage {
  /* get all fanPages */
  static all = () => {
    return axios.get( `${BASE_URL}/fanpages`);
  }

  /* get top five fanPages */
  static topFive = () => {
    return axios.get( `${BASE_URL}/fanpages/topfive`);
  }

  /* get one fanPage */
  static show = ( pageId ) => {
    return axios.get(`${BASE_URL}/fanpages/${pageId}`);
  }

  /* create fanPage */
  static create = ( pageData ) => {
    return axios.post(`${BASE_URL}/fanpages/create`, pageData );
  }

  /* update fanPage */
  static update = ( pageId, pageData ) => {
    return axios.put(`${BASE_URL}/fanpages/${pageId}/update`, pageData );
  }

  /* delete fanPage */
  static destroy = ( pageId ) => {
    return axios.delete(`${BASE_URL}/movies/${pageId}/delete`);
  }
}

export default FanPage;