import { useState, useEffect } from 'react'

import FanPageEditor from '../../components/FanPageEditor/FanPageEditor'
import ArtistSelector from '../../components/ArtistSelector/ArtistSelector'
import Spotify from '../../services/spotify'

const CreateFanPage = () => {

    const [token, setToken] = useState('')
    const [artistData, setArtistData] = useState({name: '', id: ''})
    const [artists, setArtists] = useState([])

    // fetch spotify token when the home page loads
    useEffect(() => {
        fetchToken()
    }, [])

    // feth spotify token and set it to token state
    const fetchToken = async () => {

        const res = await Spotify.getToken()

        setToken(res.data.access_token)
    }

    // fetch artist array from spotify and set it to artists state, pass it to ArtistSelector component to display
    const fetchArtists = async (token, artist) => {
        const res = await Spotify.searchArtists(token, artist)

        setArtists(res.data.artists.items)
    }

    return (
        <div className="CreateFanPage">
            {/* if no artist is selected yet, show ArtistSelector. Once artist is selected, show FanPageEditor */}
            {
                artistData.name === '' ?
                <ArtistSelector 
                token={ token } 
                fetchArtists={ fetchArtists } 
                artists={ artists } 
                setArtists={ setArtists } 
                setArtistData={ setArtistData }/>
                :
                <FanPageEditor />
            }
        </div>
    )
}

export default CreateFanPage