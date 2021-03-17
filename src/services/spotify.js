import axios from 'axios'
const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } = process.env
const BASE_URL = 'https://api.spotify.com/v1'


class Spotify {

    // NOTE will need to create .env file with REACT_APP_CLIENT_ID and REACT_APP_CLIENT_SECRET to make the below function work

    static getToken = () => {

        return axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : `Basic ${btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`)}`
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })

    };

    // search artists

    static searchArtists = (token, keyword) => {

        return axios(`${BASE_URL}/search?q=${keyword}&type=artist`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            method: 'GET'
        })

    };    

    // get all albums by an artist

    static getAlbums = (token, artistId) => {

        return axios(`${BASE_URL}/artists/${artistId}/albums?include_groups=album`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            method: 'GET'
        })

    };

    

    // get all tracks of an artist (will need to fetch all albums and use getMultipleAlbums endpoint to fetch all of its tracks)

    // get top tracks of an artist

    // get top albums of an artist (seems like there's no endpoint for that)

}

export default Spotify