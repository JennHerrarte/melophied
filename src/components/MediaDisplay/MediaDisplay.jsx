import './MediaDisplay.css'

const MediaDisplay = () => {
    return (
        <div className="MediaDisplay d-flex flex-column">
            <div className="MediaDisplay__img d-flex flex-column justify-content-around align-items-center">
                <img src="https://i.scdn.co/image/ab67616d0000b2739b62279a02431588835695e9" alt=""/>
                <div className="MediaDisplay__info__name">Special Kind Of Bad</div>
            </div>
            <div className="MediaDisplay__info">
                <div className="MediaDisplay__info__year">Release Year: 2019</div>
                <div className="MediaDisplay__info__album">Album: Trunk Muzik 3</div>
                <div className="MediaDisplay__info__trackNum">Track #: 4</div>
                <div className="MediaDisplay__info__duration">Duration: 3:46</div>
                <div className="MediaDisplay__info__link"><a href="https://open.spotify.com/track/5nOGHgisM8vmS7SsazZZF2" target="_blank" rel="noreferrer">Spotify Link</a></div>
            </div>
        </div>
    )

}

export default MediaDisplay