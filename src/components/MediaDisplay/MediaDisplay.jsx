import './MediaDisplay.css'

const MediaDisplay = ({displayTrackData}) => {
    console.log(displayTrackData);
    return (
        <div className="MediaDisplay d-flex flex-column">
            {
                Object.keys(displayTrackData).length ? 
                <>
                <div className="MediaDisplay__img d-flex flex-column justify-content-around align-items-center">
                    <img src={`${displayTrackData.album.images[0].url}`} alt=""/>
                    <div className="MediaDisplay__info__name">{displayTrackData.name}</div>
                </div>
                <div className="MediaDisplay__info">
                    <div className="MediaDisplay__info__album">Album: {displayTrackData.album.name}</div>
                    <div className="MediaDisplay__info__year">Release Year: {displayTrackData.album.release_date}</div>
                    <div className="MediaDisplay__info__trackNum">Track #: {displayTrackData.track_number}</div>
                    <div className="MediaDisplay__info__duration">Duration: {displayTrackData.duration_ms}</div>
                    <div className="MediaDisplay__info__link"><a href={displayTrackData.external_urls.spotify} target="_blank" rel="noreferrer">Spotify Link</a></div>
                </div>
                </>
            :
            ''
            }
            
        </div>
    )

}

export default MediaDisplay