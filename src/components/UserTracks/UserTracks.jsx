import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './UserTracks.css'

const UserTracks = ({userTracks}) => {

    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
          <h1 className='maincardtitle'>Tracks</h1>
          <Card.Title>My Top 5 Tracks</Card.Title>
          <Card.Text>
            {
              userTracks ?
              <ol>
                  {
                    userTracks.map((track) => <li>{track.name}</li> )
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

export default UserTracks; 

