import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './UserTracks.css'

const UserTracks = ({topTracks}) => {
    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
          <h1 className='maincardtitle'>Tracks</h1>
          <Card.Title>My Top 5 Tracks</Card.Title>
          <Card.Text>
          <ul> 
                {
                topTracks.map((track, idx) => {
                    return(
                   <li>{track.name}</li>
                    )
                })
                
                }

            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default UserTracks; 

