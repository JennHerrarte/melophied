import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import DetailEditor from '../DetailEditor/DetailEditor'
import TrackListEditor from '../TrackListEditor/TrackListEditor'
import AlbumListEditor from '../AlbumListEditor/AlbumListEditor'
import MediaDisplay from '../MediaDisplay/MediaDisplay'
import Spotify from '../../services/spotify'
import FanPage from '../../Models/FanPageAPI'
import './FanPageEditor.css'

const FanPageEditor = ({token, artistData, currentUser, pageData}) => {

    // state for data from API
    const [trackData, setTrackData] = useState([])
    const [albumData, setAlbumData] = useState([])

    // state for user input
    const [pageTitle, setPageTitle] = useState('')
    const [pageDetail, setPageDetail] = useState('')
    const [trackList, setTrackList] = useState([])
    const [albumList, setAlbumList] = useState([])

    // state for display
    const [trackId, setTrackId] = useState('')
    const [displayTrackData, setDisplayTrackData] = useState({})

    const history = useHistory()

    const data = {
        artistData,
        pageTitle,
        pageDetail,
        trackList,
        albumList,
    }

    useEffect(() => {
        fetchMediaData(token, artistData)
        if (pageData) {
            setPageTitle(pageData.pageTitle)
            setPageDetail(pageData.pageDetail)
            setTrackList(pageData.trackList)
            setAlbumList(pageData.albumList)
        }
    }, [])

    useEffect(() => {
        if (trackId) {
            fetchTrackData(token, trackId)
        }
    }, [trackId])

    async function fetchMediaData (token, artistData) {

        try {

            const res1 = await Spotify.getTracks(token, artistData.id)

            // initialize each trackData element with selected set to false
            res1.forEach(track => track.selected = false)

            const res2 = await Spotify.getAlbums(token, artistData.id)

            // initialize each albumData element with selected set to false
            res2.data.items.forEach(album => album.selected = false)

            setTrackData(res1)
            setAlbumData(res2.data.items)
            
        } catch (error) {
            console.log(error);
        }

    }

    const fetchTrackData = async (token, trackId) => {

        const res = await Spotify.getTrack(token, trackId)

        setDisplayTrackData(res.data)

    }
    
    const createPage = async (data) => {
        
        try {

            const res = await FanPage.create(data, currentUser)

            const pageId = res.data.fanPage._id

            history.push(`/fanpage/${pageId}`)

        } catch (error) {
            console.log(error);
        }
    }

    const editPage = async (data) => {
        
        try {

            const res = await FanPage.update(pageData._id, data, currentUser)

            history.push(`/fanpage/${pageData._id}`)

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="FanPageEditor d-flex flex-column">
            { pageData ? 'Editing' : 'Creating'} Fan Page for {artistData.name}
            <DetailEditor pageTitle={pageTitle} setPageTitle={setPageTitle} 
            pageDetail={pageDetail}
            setPageDetail={setPageDetail} />
            <div className="FanPageEditor__list-editors-wrapper d-flex justify-content-between" >
                <TrackListEditor trackData={trackData} trackList={trackList} setTrackList={setTrackList} setTrackId={setTrackId} setDisplayTrackData={setDisplayTrackData} />
                <MediaDisplay displayTrackData={displayTrackData} />
                <AlbumListEditor albumData={albumData} albumList={albumList} setAlbumList={setAlbumList} />
            </div>
            {
                pageTitle && trackList.length >= 1 && albumList.length >= 1 ?
                <button className="btn btn-success" onClick={() => { pageData ? editPage(data) : createPage(data)}}>
                    {pageData ? "Save" : "Create Page" }
                </button>
                :
                <button className="btn btn-danger" disabled>
                    Finish completing the page editor!
                </button>
            }
            <audio id="displayAudio" className="d-none" src=""></audio>
        </div>
    )
}

export default FanPageEditor

