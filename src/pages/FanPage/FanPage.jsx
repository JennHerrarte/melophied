import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import FanPageBio from '../../components/FanPageBio/FanPageBio'
import UserAlbums from '../../components/UserAlbums/UserAlbums'
import UserTracks from '../../components/UserTracks/UserTracks'
import Kevin from '../FanPage/testimages/Kevin.png' 
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'
import Spotify from '../../services/spotify'
import FanPageAPI from '../../Models/FanPageAPI'
import UpVoteButton from '../../components/UpVoteButton/UpVoteButton'

import './FanPage.css'

const FanPage = () => {

    const [token, setToken ] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [pageData, setPageData] = useState({})

    const params = useParams()
    const pageId = params.id

    useEffect(() => {
            fetchToken();
            fetchPageData(pageId);
    }, []) 

    useEffect(() => {
        if(pageData && token) {
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
            <div className='header'>
              <img src={Kevin} className="Kevin" fluid alt="Kevin"/>
              <h1 className='artistTitle'>{pageData.pageTitle}</h1>
             
              </div>
             

            <FanPageBio pageData={pageData}/>
            <UpVoteButton/>
            <ArtistTopTracksContainer topTracks={topTracks} />
            <div className="FanPageBody">
                <UserTracks userTracks={pageData.trackList}/>
                <UserAlbums userAlbums={pageData.albumList}/>
            </div>
        </div>
    )
}

export default FanPage;