import axios from 'axios'
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env


class Spotify {

    // NOTE will need to create .env file with REACT_APP_CLIENT_ID and REACT_APP_CLIENT_SECRET to make the below function work

    static getToken = () => {

        return axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(REACT_APP_CLIENT_ID + ':' + REACT_APP_CLIENT_SECRET)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })

    }

}

export default Spotify