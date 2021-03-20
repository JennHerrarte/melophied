import {useState, useEffect} from 'react'
import FanPageBio from '../../components/FanPageBio/FanPageBio'
import UserAlbums from '../../components/UserAlbums/UserAlbums'
import UserTracks from '../../components/UserTracks/UserTracks'
import UserShows from '../../components/UserShows/UserShows'
import Kevin from '../FanPage/testimages/Kevin.png' 
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'
import Spotify from '../../services/spotify'
import FanPageAPI from '../../Models/FanPageAPI'


import './FanPage.css'

const FanPage = () => {

    const [token, setToken ] = useState('');
    const [pageData, setPageData] = useState({})
    const [topTracks, setTopTracks] = useState([]);
    const [userAlbums, setUserAlbums] = useState([]);
    const [userTracks, setUserTracks] = useState([]);

    useEffect(() => {
            fetchToken();
    }, []) 

    useEffect(() => {
        if(token) {
            fetchTopTracks(token, '06HL4z0CvFAxyc27GXpf02');
        }
    }, [token]) 

    useEffect(() => {
        if(token) {
            fetchPageData('605664f0e8bf720015451414');
        }
    }, [token]) 


    const fetchToken = async() => {
        const res = await Spotify.getToken()

        setToken(res.data.access_token)
    }
    
    // response is 
    // res.data.tracks[idx] {
    //     id,
    //     name,
    //     artists,
    //     album.images, 
    // }

 
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
              <h1 className='artistTitle'>Tame Impala</h1>
              </div>


            <FanPageBio/>
            <ArtistTopTracksContainer topTracks={topTracks} />
            <div className="FanPageBody">
                <UserTracks userTracks={userTracks}/>
                <UserAlbums userAlbums={userAlbums}/>
                <UserShows/>
            </div>
        </div>
    )
}

export default FanPage;