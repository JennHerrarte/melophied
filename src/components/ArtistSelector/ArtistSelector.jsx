import './ArtistSelector.css'

const ArtistSelector = ({token, fetchArtists, artists, setArtists, setArtistId }) => {

    return (
        <div className="ArtistSelector">
            <input type="text" className="artistSearchBar" placeholder="Find your artist" 
            onChange={(e) => e.target.value ? fetchArtists(token, e.target.value): setArtists([])} />
            {
                artists.length ? 
                <div class="searchResult">
                    {
                        artists.map((artist) => <p key={artist.id}>{artist.name}</p> )
                    }
                </div> 
                : 
                ''
            }
        </div>
    )
}

export default ArtistSelector