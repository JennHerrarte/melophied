import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import FanPageBio from '../../components/FanPageBio/FanPageBio'
import UserAlbums from '../../components/UserAlbums/UserAlbums'
import UserTracks from '../../components/UserTracks/UserTracks'
import musicianImg from '../FanPage/testimages/musician.jpg' 
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'
import Spotify from '../../services/spotify'
import FanPageAPI from '../../Models/FanPageAPI'


import './FanPage.css'

const FanPage = () => {

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
            {
                pageData.artistData ?
                <>
                <div className='FanPage__banner' >
                    {
                        pageData.artistData.artistImage ?
                        <div className="artistPortrait" style={{backgroundImage: `url(${pageData.artistData.artistImage})`, backgroundSize: 'cover'}}></div>
                        :
                        <div className="artistPortrait" style={{backgroundImage: `url(${musicianImg})`, backgroundSize: 'cover'}}></div>
                    }
                    <h1 className='artistTitle'>{pageData.pageTitle}</h1>                    
                </div>


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