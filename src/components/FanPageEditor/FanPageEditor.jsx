import {useState, useEffect} from 'react'

import DetailEditor from '../DetailEditor/DetailEditor'
import TrackListEditor from '../TrackListEditor/TrackListEditor'
import AlbumListEditor from '../AlbumListEditor/AlbumListEditor'
import ShowListEditor from '../ShowListEditor/ShowListEditor'
import Spotify from '../../services/spotify'

const FanPageEditor = ({token, artistData}) => {
    // state for data from API
    const [trackData, setTrackData] = useState([])
    const [albumData, setAlbumData] = useState([])

    // state for user input
    const [trackList, setTrackList] = useState([])
    const [albumList, setAlbumList] = useState([])
    const [showList, setShowList] = useState([])

    useState(() => {
        fetchMediaData(token, artistData)
    }, [])

    async function fetchMediaData (token, artistData) {

        const res1 = await Spotify.getTracks(token, artistData.id)

        const res2 = await Spotify.getAlbums(token, artistData.id)

        setTrackData(res1)
        setAlbumData(res2.data.items)
        
    }    

    return(
        <div className="FanPageEditor">
            Creating Fan Page for {artistData.name}
            <DetailEditor />
            <div className="FanPageEditor__list-editors-wrapper d-flex justify-content-around" >
                <TrackListEditor trackData={trackData} trackList={trackList} setTrackList={setTrackList} />
                <AlbumListEditor albumData={albumData} albumList={albumList} setAlbumList={setAlbumList} />
                <ShowListEditor showList={showList} setShowList={setShowList} />
            </div>
            {/* 
            Checklist:
            DONE 1. Detail Editor
            Mounted 2. Track List Editor
            Mounted 3. Album List Editor
            4. Show List Editor
            5. Submit button with logic to send POST request to the server
            */}
        </div>
    )
}

export default FanPageEditor