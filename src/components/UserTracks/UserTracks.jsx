import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import './Tracks.css'

const UserTracks = () => {
    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
          <h1 className='maincardtitle'>Tracks</h1>
          <Card.Title>My Top 5</Card.Title>
          <Card.Text>
            <ol>
                <li>Solitude is Bliss</li>
                <li>Eventually</li>
                <li>Alter Ego</li>
                <li>Mind Michief</li>
                <li>Patience</li>
            </ol>
          </Card.Text>
          <Card.Title>Spotify Top 5</Card.Title>
          <Card.Text>
            <ol>
                <li>The Less I Know The Better</li>
                <li>Borderline</li>
                <li>Feels Like We Only Go Backwards</li>
                <li>Let It Happen</li>
                <li>New Person, Same Old Mistakes</li>
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default UserTracks; 

