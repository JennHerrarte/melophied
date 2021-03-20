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

    static getAlbums = async (token, artistId) => {

        return axios(`${BASE_URL}/artists/${artistId}/albums?include_groups=album&limit=5`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            method: 'GET'
        })

    };

    // get all tracks of an artist (will need to fetch all albums and use getMultipleAlbums endpoint to fetch all of its tracks)

    static getTracks = (token, artistId) => {

        // fetch all albums by artistId
        return axios(`${BASE_URL}/artists/${artistId}/albums?include_groups=album`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            method: 'GET'
        })
        // concatenate all of the albums' ids as a search query format
        .then(albums => {
            const albumIds = []

            albums.data.items.forEach(album => albumIds.push(album.id))

            return albumIds.join(',')
        })
        // use Spotify's Get Several Albums endpoint to fetch albums by the artist (up to 20)
        .then(albumIdQuery => {
            return axios(`${BASE_URL}/albums?ids=${albumIdQuery}`, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                },
                method: 'GET'
            })
        })
        // with the albumsData retrieved, put it into an array
        .then(albumsData => {
            const albumList = []

            albumsData.data.albums.forEach(album => albumList.push(album.tracks.items))

            return albumList
        })
        // push all tracks of each element (album) of albumList into trackList array and return it
        .then(albumList => {
            const trackList = []

            albumList.forEach(album => {
                album.forEach(track => trackList.push(track))
            })

            return trackList
        })

    };

    // get top tracks of an artist

    static getTopTracks = (token, artistId) => {

        return axios(`${BASE_URL}/artists/${artistId}/top-tracks?market=US`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            },
            method: 'GET'
        })

    };
}

export default Spotify