const AlbumListEditor = ({albumData, albumList, setAlbumList}) => {

    /* 

        NOTE album data
        
        ARRAY albumData[idx] {
            id,
            name,
            artists,
            images,
            release_date,
            total_tracks
        }
        
    */

    return (
        <div className="AlbumListEditor d-flex flex-column">
            <div className="AlbumListEditor__user-selection">
                User Selection
            </div>
            <div className="AlbumListEditor__spotify-data">
                Albumlist
            </div>
        </div>
    )
}

export default AlbumListEditor