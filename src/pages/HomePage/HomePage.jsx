import {useState, useEffect} from 'react'
import Spotify from '../../services/spotify'
import FanPagesContainer from '../../components/FanPagesContainer/FanPagesContainer'

const HomePage = () => {

    // NOTE TESTING SPOTIFY SEARCH API, WILL NEED TO MOVE IT TO CREATEFANPAGE ONCE THE PAGE IS CREATED.

        // fetch token and store it into state (Will need to import useState, useEffect from react and Spotify class from services folder)
        const [token, setToken] = useState('')
        const [artists, setArtists] = useState([])

        // fetch spotify token when the home page loads
        useEffect(() => {
            fetchToken()
        }, [])

        // fetch artists matching search query when token is loaded
        useEffect(() => {
            if (token) {
                fetchArtists(token, 'Taylor Swift')
            }
        }, [token])

        // feth spotify token and set it to token state
        const fetchToken = async () => {

            const res = await Spotify.getToken()

            setToken(res.data.access_token)
        }

        // feth artist array from spotify and set it to artists state
        const fetchArtists = async (token, artist) => {
            const res = await Spotify.searchArtists(token, artist)

            setArtists(res.data.artists.items)
        }
        // -----------------------------------    
    
    // --------------------------------------------------------------------------------------------------------------------------------------------   

    return (
        <div className="HomePage">
            <h1>Hello World!</h1>
            <p>These are my top 5 fan pages</p>
            <FanPagesContainer/>
        </div>
    )
}

export default HomePage