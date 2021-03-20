import {useState, useEffect} from 'react'

import DetailEditor from '../DetailEditor/DetailEditor'
import TrackListEditor from '../TrackListEditor/TrackListEditor'
import AlbumListEditor from '../AlbumListEditor/AlbumListEditor'
import Spotify from '../../services/spotify'
import FanPage from '../../Models/FanPage'

const FanPageEditor = ({token, artistData, currentUser}) => {

    // state for data from API
    const [trackData, setTrackData] = useState([])
    const [albumData, setAlbumData] = useState([])

    // state for user input
    const [pageTitle, setPageTitle] = useState('')
    const [pageDetail, setPageDetail] = useState('')
    const [trackList, setTrackList] = useState([])
    const [albumList, setAlbumList] = useState([])

    const data = {
        artistData,
        pageTitle,
        pageDetail,
        trackList,
        albumList,
    }

    useState(() => {
        fetchMediaData(token, artistData)
    }, [])

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
    
    const createPage = async (data) => {
        
        try {

            const res = await FanPage.create(data, currentUser)

            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="FanPageEditor d-flex flex-column">
            Creating Fan Page for {artistData.name}
            <DetailEditor setPageTitle={setPageTitle} setPageDetail={setPageDetail} />
            <div className="FanPageEditor__list-editors-wrapper d-flex justify-content-around" >
                <TrackListEditor trackData={trackData} trackList={trackList} setTrackList={setTrackList} />
                <AlbumListEditor albumData={albumData} albumList={albumList} setAlbumList={setAlbumList} />
            </div>
            <button className="btn btn-success" onClick={() => {createPage(data)}}>
                Create Page
            </button>
        </div>
    )
}

export default FanPageEditor