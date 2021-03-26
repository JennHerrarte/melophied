import './MediaDisplay.css'

const MediaDisplay = ({displayTrackData, displayAlbumData}) => {

    const convertMs = (millis) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);

        //If seconds is less than 10 put a zero in front.
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
        
    }

    const convertDate = (dateStr) => {
        const date = new Date(dateStr)

        return date.getFullYear().toString()
    }


    return (
        <div className="MediaDisplay d-flex flex-column">
            {
                Object.keys(displayTrackData).length || Object.keys(displayAlbumData).length  ? 
                <>
                {
                Object.keys(displayTrackData).length ?
                <>
                <div className="MediaDisplay__img d-flex flex-column justify-content-around align-items-center">
                    <img src={`${displayTrackData.album.images[0].url}`} alt=""/>
                    <div className="MediaDisplay__info__name">{displayTrackData.name}</div>
                </div>
                <div className="MediaDisplay__info">
                    <div className="MediaDisplay__info__album">Album: {displayTrackData.album.name}</div>
                    <div className="MediaDisplay__info__year">Release Year: {convertDate(displayTrackData.album.release_date)}</div>
                    <div className="MediaDisplay__info__trackNum">Track #: {displayTrackData.track_number}</div>
                    <div className="MediaDisplay__info__duration">Duration: {convertMs(displayTrackData.duration_ms)}</div>
                </div>
                </>
                :
                <>
                <div className="MediaDisplay__img d-flex flex-column justify-content-around align-items-center">
                    <img src={`${displayAlbumData.images[0].url}`} alt={displayAlbumData.name}/>
                </div>
                <div className="MediaDisplay__info">
                    <div className="MediaDisplay__info__album">{displayAlbumData.name}</div>
                    <div className="MediaDisplay__info__year">Release Year: {convertDate(displayAlbumData.release_date)}</div>
                    <div className="MediaDisplay__info__trackNum">Total Tracks: {displayAlbumData.total_tracks}</div>
                </div>
                </>
                }
                </>
            :
            ''
            }
            
        </div>
    )

}

export default MediaDisplay