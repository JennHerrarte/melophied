import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:3005/api'

class User {

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
        return axios.get(`${BASE_URL}/auth/profile`, {
            headers: {
            authorization: `Bearer ${token}`
            }
        });
    }

}

export default User;