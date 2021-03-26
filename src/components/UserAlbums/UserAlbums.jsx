
import { Card } from 'react-bootstrap'
import './UserAlbums.css'


const UserAlbums = ({userAlbums, username}) => {

    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
        <h1 className='maincardtitle'>Albums</h1>
        <Card.Title>{username}'s Top 5</Card.Title>
          <Card.Text>
          {
              userAlbums ?
              <ol>
                  {
                    userAlbums.map((album, idx) => <li key={`album${idx}`}>{album.name}</li> )
                  }
              </ol>
              :
              <h2>LOADING</h2>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default UserAlbums; 