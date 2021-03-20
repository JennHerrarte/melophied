import ArtistTopTracks from "../ArtistTopTracks/ArtistTopTracks"
import './ArtistTopTracksContainer.css'

const ArtistTopTracksContainer = ({topTracks}) => {
    return(
        <div className='attc'>
            <p>I am the container that holds the artist top tracks</p>
            <ArtistTopTracks topTracks={topTracks}/>
        </div>
    )
}

export default ArtistTopTracksContainer;