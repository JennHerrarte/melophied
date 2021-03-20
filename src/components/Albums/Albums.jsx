
import { Card } from 'react-bootstrap'
import './Albums.css'

const Albums = ({userTopAlbums}) => {
  console.log(userTopAlbums)
    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
        <h1 className='maincardtitle'>Albums</h1>
        <Card.Title>My Top 5</Card.Title>
          <Card.Text>
          <ol>
          {
                userTopAlbums.map((album, idx) => {
                    return(
                    <div>
                   <li>{album.name} <img src={album.images[0].url}/></li>
                      
                
               
                   </div>
                    )
                })
                
                }
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Albums; 