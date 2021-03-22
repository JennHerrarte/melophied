import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import FanPageEditor from '../../components/FanPageEditor/FanPageEditor'
import ArtistSelector from '../../components/ArtistSelector/ArtistSelector'
import Spotify from '../../services/spotify'
import FanPageAPI from '../../Models/FanPageAPI.js'

const EditFanPage = ({currentUser}) => {

    const [token, setToken] = useState('')
    const [artistData, setArtistData] = useState({name: '', id: '', artistImage: ''})
    const [artists, setArtists] = useState([])
    const [pageData, setPageData] = useState({})

    const params = useParams()
    const pageId = params.id

    // fetch spotify token when the home page loads
    useEffect(() => {
        fetchToken()
        fetchPageData(pageId)
    }, [])

    // feth spotify token and set it to token state
    const fetchToken = async () => {

        const res = await Spotify.getToken()

        setToken(res.data.access_token)
    }

    const fetchPageData = async(pageId) => {
        const res = await FanPageAPI.show(pageId)

        setPageData(res.data.foundFanPage)
        setArtistData(res.data.foundFanPage.artistData)
    }


    // fetch artist array from spotify and set it to artists state, pass it to ArtistSelector component to display
    const fetchArtists = async (token, artist) => {
        const res = await Spotify.searchArtists(token, artist)

        setArtists(res.data.artists.items)
    }

    return (
        <div className="EditFanPage">
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
                <FanPageEditor token={token} artistData={artistData} currentUser={currentUser} pageData={pageData} />
            }
        </div>
    )
}

export default EditFanPage