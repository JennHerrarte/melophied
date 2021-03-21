import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import FanPageBio from '../../components/FanPageBio/FanPageBio'
import UserAlbums from '../../components/UserAlbums/UserAlbums'
import UserTracks from '../../components/UserTracks/UserTracks'
import FanPageButtons from '../../components/FanPageButtons/FanPageButtons'
import FanPageBanner from '../../components/FanPageBanner/FanPageBanner'
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'
import Spotify from '../../services/spotify'
import FanPageAPI from '../../Models/FanPageAPI'


import './FanPage.css'

const FanPage = ({currentUser}) => {

    const [token, setToken ] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [pageData, setPageData] = useState({})

    const params = useParams()
    const pageId = params.id

    useEffect(() => {
            fetchToken();
    }, []) 

    useEffect(() => {
        if(token) {
            fetchPageData(pageId);
        }
    }, [token])

    useEffect(() => {
        if(pageData && token) {
            fetchPageData(pageId);
            fetchTopTracks(token, pageData.artistData.id);
        }
    }, [pageData]) 


    const fetchToken = async() => {
        const res = await Spotify.getToken()

        setToken(res.data.access_token)
    }
 
    const fetchTopTracks = async(token, artistId) => {
        const res = await Spotify.getTopTracks(token, artistId)

        setTopTracks(res.data.tracks)
    }


    const fetchPageData = async(pageId) => {
        const res = await FanPageAPI.show(pageId)

        setPageData(res.data.foundFanPage)
    }


    return (
        <div className="FanPage">
            <FanPageButtons currentUser={currentUser} pageData={pageData} />
            {
                pageData.artistData ?
                <>
                <FanPageBanner pageData={pageData} />


                <FanPageBio pageData={pageData}/>
                <ArtistTopTracksContainer topTracks={topTracks} />
                <div className="FanPageBody">
                    <UserTracks userTracks={pageData.trackList}/>
                    <UserAlbums userAlbums={pageData.albumList}/>
                </div>
                </>
                :
                <h2>LOADING DATA...</h2>
            }
        </div>
    )
}

export default FanPage;