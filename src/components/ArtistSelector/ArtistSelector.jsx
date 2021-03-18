const ArtistSelector = ({token, fetchArtists}) => {

    return (
        <div className="ArtistSelector">
            <input type="text" className="artistSearchBar" placeholder="Find your artist" 
            onChange={(e) => fetchArtists(token, e.target.value)} />
        </div>
    )
}

export default ArtistSelector