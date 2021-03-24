import {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import FanPageBio from '../../components/FanPageBio/FanPageBio'
import UserAlbums from '../../components/UserAlbums/UserAlbums'
import UserTracks from '../../components/UserTracks/UserTracks'
import FanPageHeader from '../../components/FanPageHeader/FanPageHeader'
import ArtistTopTracksContainer from '../../components/ArtistTopTracksContainer/ArtistTopTracksContainer'
import Spotify from '../../services/spotify'
import FanPageAPI from '../../Models/FanPageAPI'
import jwtDecode from 'jwt-decode'


import './FanPage.css'

const FanPage = ({currentUser}) => {

    const [token, setToken ] = useState('');
    const [topTracks, setTopTracks] = useState([]);
    const [pageData, setPageData] = useState({})
    const [userId, setUserId] = useState('')

    const params = useParams()
    const history = useHistory()
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
            fetchTopTracks(token, pageData.artistData.id);
        }
    }, [pageData])

    useEffect(() => {
        // decode userId and set it as current userId
        if (currentUser) setUserId(jwtDecode(currentUser)._id)
    }, [currentUser])


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

    const deletePage = async (pageId, userToken) => {
        const res = await FanPageAPI.delete(pageId, userToken)
        
        history.push('/')
    }

    const upvotePage = async () => {
        
        try {

            const res = await FanPageAPI.upvote(pageData._id, currentUser)

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="FanPage">
            {
                Object.entries(pageData).length !== 0 ?
                <>
                <FanPageHeader currentUser={currentUser} userId={userId} pageData={pageData} deletePage={deletePage} upvotePage={upvotePage} />
                
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