import {useState, useEffect} from 'react'
import Spotify from '../../services/spotify'

const HomePage = () => {

    // fetch token and store it into state (Will need to import useState, useEffect from react and Spotify class from services folder)
    const [token, setToken] = useState('')

    useEffect(() => {
        fetchToken()
    }, [])

    const fetchToken = async () => {

        const res = await Spotify.getToken()

        setToken(res.data.access_token)
    }
    // -----------------------------------    

    return (
        <div className="HomePage">
            <h1>Hello World!</h1>
        </div>
    )
}

export default HomePage