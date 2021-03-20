const ArtistTopTracks = ({topTracks}) => {
   
    return(
        <div className='ArtistTopTracks'>
            <ul> 
                {
                topTracks.map((track, idx) => {
                    return(
                   <li>{track.name}</li>
                    )
                })
                
                }

            </ul>
        </div>
    )
}

export default ArtistTopTracks;

 // response is 
    // res.data.tracks[idx] {
    //     id,
    //     name,
    //     artists,
    //     album.images, 
    // }