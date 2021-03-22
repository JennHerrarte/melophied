import './TrackListEditor.css'

const TrackListEditor = ({trackData, trackList, setTrackList}) => {
    /*
        NOTE track data

        ARRAY trackData[idx] {
            id,
            name,
            artists,
            preview_url,
            external_urls.spotify,
        }
    */

    trackList.forEach( (track) => {
        
        trackData.forEach((data) => {

            if (track.id === data.id) {
                data.selected = true
            }
            return

        })

    })

    return (
        <div className="TrackListEditor d-flex flex-column">
            <div className="TrackListEditor__user-selection">
                Selected Tracks
                {/* display list of tracks selected */}
                {
                    trackList.map((track, idx) => 

                    <div  
                    className="TrackListEditor__selected-tracks" 
                    key={`track${idx}`}>

                        {track.name}

                    </div>)
                }
            </div>
            <div className="TrackListEditor__spotify-data">
                {
                    trackData.map((track, idx) =>

                    // if trackList reached its max 5 and track.selected is false, then show plain div with click disabled
                    trackList.length >= 5 && track.selected === false ? 

                    <div
                    className="TrackListEditor__track disable-click" 
                    key={`track-data${idx}`}>

                        {track.name}

                    </div>

                    :
                    
                    // else, show regular div with clickable option that togges track.selected and its css class 'selected'
                    <div
                    onClick={(e) => {
                        // ternary opertaor to add or remove track from trackList based on track.selected
                        track.selected ?  
                        setTrackList(trackList.filter(value => value.id !== track.id ))
                        :
                        setTrackList([...trackList, track])

                        // toggle track.selected to true or false
                        track.selected = !track.selected

                    }} 
                    className={`TrackListEditor__track ${track.selected ? 'selected' : ''}`} 
                    key={`track-data${idx}`}>

                        {track.name}

                    </div>)
                }
            </div>
        </div>
    )
}

export default TrackListEditor