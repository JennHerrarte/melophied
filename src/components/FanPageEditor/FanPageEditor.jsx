import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import DetailEditor from '../DetailEditor/DetailEditor'
import TrackListEditor from '../TrackListEditor/TrackListEditor'
import AlbumListEditor from '../AlbumListEditor/AlbumListEditor'
import Spotify from '../../services/spotify'
import FanPage from '../../Models/FanPageAPI'

const FanPageEditor = ({token, artistData, currentUser, pageData}) => {

    // state for data from API
    const [trackData, setTrackData] = useState([])
    const [albumData, setAlbumData] = useState([])

    // state for user input
    const [pageTitle, setPageTitle] = useState('')
    const [pageDetail, setPageDetail] = useState('')
    const [trackList, setTrackList] = useState([])
    const [albumList, setAlbumList] = useState([])

    const history = useHistory()

    const data = {
        artistData,
        pageTitle,
        pageDetail,
        trackList,
        albumList,
    }

    useState(() => {
        fetchMediaData(token, artistData)
        if (pageData) {
            setPageTitle(pageData.pageTitle)
            setPageDetail(pageData.pageDetail)
            setTrackList(pageData.trackList)
            setAlbumList(pageData.albumList)
        }
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
            <div className="FanPageEditor__list-editors-wrapper d-flex justify-content-around" >
                <TrackListEditor trackData={trackData} trackList={trackList} setTrackList={setTrackList} />
                <AlbumListEditor albumData={albumData} albumList={albumList} setAlbumList={setAlbumList} />
            </div>
            {
                pageTitle && trackList.length === 5 && albumList.length === 5 ?
                <button className="btn btn-success" onClick={() => { pageData ? editPage(data) : createPage(data)}}>
                    {pageData ? "Save" : "Create Page" }
                </button>
                :
                <button className="btn btn-danger" disabled>
                    Finish completing the page editor!
                </button>
            }
            
        </div>
    )
}

export default FanPageEditor

