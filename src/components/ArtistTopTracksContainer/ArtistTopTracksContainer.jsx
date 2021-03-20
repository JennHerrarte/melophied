import ArtistTopTracks from "../ArtistTopTracks/ArtistTopTracks"
import './ArtistTopTracksContainer.css'

const ArtistTopTracksContainer = () => {
    return(
        <div className='attc'>
            <p>I am the container that holds the artist top tracks</p>
            <ArtistTopTracks/>
        </div>
    )
}

export default ArtistTopTracksContainer;