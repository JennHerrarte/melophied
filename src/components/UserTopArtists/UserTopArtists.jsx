//TODO function to fetch user's top artists

const UserTopArtists = ({userTopArtists}) => {
    return (
        <div>
            <h1>My Top Artists</h1>
            <ul>
           {
               userTopArtists.map((page, idx) => {
                return(
                
                    <li key={idx}>top user artist goes here</li>
                  
                    ) 
               })
           } 
        </ul>
        </div>
        
    )
}

export default UserTopArtists;