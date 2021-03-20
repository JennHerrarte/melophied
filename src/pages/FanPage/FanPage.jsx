import {useState, useEffect} from 'react'
import FanPageBio from '../../components/FanPageBio/FanPageBio'
import Albums from '../../components/Albums/Albums'
import UserTracks from '../../components/UserTracks/UserTracks'
import UserShows from '../../components/UserShows/UserShows'
import Kevin from '../FanPage/testimages/Kevin.png' 
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'
import Spotify from '../../services/spotify'

import './FanPage.css'

const FanPage = () => {

    const [token, setToken ] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [userTopAlbums, setUserTopAlbums] = useState([]);

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
            fetchUserTopAlbums(token, '06HL4z0CvFAxyc27GXpf02');
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


    const fetchUserTopAlbums = async(token, artistId) => {
        const res = await Spotify.getAlbums(token, artistId)

       console.log(res)

       setUserTopAlbums(res.data.items)
    }


    return (
        <div className="FanPage">
              <img src={Kevin} className="Kevin" fluid alt="Kevin"/>
            <h1 className='artistTitle'>Tame Impala</h1>
            <FanPageBio/>
            <ArtistTopTracksContainer topTracks={topTracks} />
            <div className="FanPageBody">
                <UserTracks topTracks={topTracks}/>
                <Albums userTopAlbums={userTopAlbums}/>
                <UserShows/>
            </div>
        </div>
    )
}

export default FanPage;