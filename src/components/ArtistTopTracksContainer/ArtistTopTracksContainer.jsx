import ArtistTopTracks from "../ArtistTopTracks/ArtistTopTracks"
import './ArtistTopTracksContainer.css'

const ArtistTopTracksContainer = ({topTracks}) => {
    return(
        <div className='attc container'>
            <p>Artist Top Tracks</p>
            {
                topTracks.length > 0 ?
                <ArtistTopTracks topTracks={topTracks}/>
                :
                <p>LOADING DATA...</p>

            }
            
        </div>
    )
}

export default ArtistTopTracksContainer;