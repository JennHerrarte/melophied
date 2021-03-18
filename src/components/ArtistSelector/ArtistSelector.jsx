import './ArtistSelector.css'

const ArtistSelector = ({token, fetchArtists, artists, setArtists, setArtistId }) => {

    return (

        <div className="ArtistSelector">
                {/* when searchbar input changes, fetch Artists. If searchbar is blank, setArtist to empty array */}
            <input type="text" className="ArtistSelector__artistSearchBar" placeholder="Find your artist" 
            onChange={(e) => e.target.value ? fetchArtists(token, e.target.value): setArtists([])} />
                {/* if artists is not empty, show search result below the input */}
            {
                artists.length ? 
                <div class="ArtistSelector__searchResult">
                    {/* show clickable paragraph for each artists in the array. When artist is clicked, sets the ID of the artist for the FanPage */}
                    {
                        artists.map((artist) => <p className="ArtistSelector__artist" key={artist.id} onClick={() => {
                            setArtistId(artist.id)
                        }}>{artist.name}</p> )
                    }

                </div> 
                : 
                ''
            }

        </div>

    )
}

export default ArtistSelector