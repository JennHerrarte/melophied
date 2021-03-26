import './AlbumListEditor.css'

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

    albumList.forEach( (album) => {
        
        albumData.forEach((data) => {

            if (album.id === data.id) {
                data.selected = true
            }
            return

        })

    })

    return (
        <div className="AlbumListEditor d-flex flex-column">
            <div className="AlbumListEditor__user-selection">
                Selected Albums
                {/* display list of albums selected */}
                <ol className="AlbumListEditor__user-selection__list">
                    {
                        albumList.map((album, idx) => 

                        <li  
                        className="AlbumListEditor__selected-albums" 
                        key={`album${idx}`}>

                            {album.name}

                        </li>)
                    }
                </ol>
            </div>
            <div className="AlbumListEditor__spotify-data">
                {
                    albumData.map((album, idx) => 

                    // if albumList reached its max 5 and album.selected is false, then show plain div with click disabled
                    albumList.length >= 5 && album.selected === false ? 

                    <div
                    className="AlbumListEditor__album disable-click" 
                    key={`album-data${idx}`}>

                        {album.name}

                    </div>

                    :
                    
                    // else, show regular div with clickable option that toggles album.selected and its css class 'selected'
                    <div
                    onClick={(e) => {
                        // ternary opertaor to add or remove album from albumList based on album.selected
                        album.selected ?  
                        setAlbumList(albumList.filter(value => value.id !== album.id ))
                        :
                        setAlbumList([...albumList, album])

                        // toggle album.selected to true or false
                        album.selected = !album.selected

                    }} 
                    className={`AlbumListEditor__album ${album.selected ? 'selected' : ''}`} 
                    key={`album-data${idx}`}>

                        {album.name}

                    </div>)
                }
            </div>
        </div>
    )
}

export default AlbumListEditor