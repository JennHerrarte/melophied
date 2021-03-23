import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

class UserAPI {

    // when invoking this method, will need to pass the user's registration data
    static register = ( userData ) => {
        return axios.post(`${BASE_URL}/auth/register`, userData );
    }

    // when invoking this method, will need to pass the user's login data
    static login = ( userData ) => {
        return axios.post(`${BASE_URL}/auth/login`, userData );
    }

    // when invoking this method, will need to pass the user's token (local storage's uid)
    static profile = ( token ) => {
        return axios.get(`${BASE_URL}/auth/user`, {
            headers: {
            authorization: `Bearer ${token}`
            }
        });
    }

     /* update user profile */
    static updateProfile = ( userID, token, userData) => {
    return axios.put(`${BASE_URL}/auth/updateProfile/${userID}`, userData, {
      headers: {
        authorization: `Bearer ${token}`
      }
    } );
  }

}



export default UserAPI;

