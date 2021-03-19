import {useState, useEffect} from 'react'

import DetailEditor from '../DetailEditor/DetailEditor'
import TrackListEditor from '../TrackListEditor/TrackListEditor'
import AlbumListEditor from '../AlbumListEditor/AlbumListEditor'
import ShowListEditor from '../ShowListEditor/ShowListEditor'
import Spotify from '../../services/spotify'

const FanPageEditor = ({token, artistData}) => {

    const [trackList, setTrackList] = useState([])
    const [albumList, setAlbumList] = useState([])
    const [showList, setShowList] = useState([])

    useState(() => {

    }, [])

    // use getAlbums(token, artistId) and getTracks(token, artistId) to fetch tracks and albums

    return(
        <div className="FanPageEditor">
            Creating Fan Page for {artistData.name}
            <DetailEditor />
            <div className="FanPageEditor__list-editors-wrapper d-flex justify-content-around" >
                <TrackListEditor />
                <AlbumListEditor />
                <ShowListEditor />
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