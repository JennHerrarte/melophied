
import { Card } from 'react-bootstrap'
import './Albums.css'

const Albums = () => {
    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
        <h1 className='maincardtitle'>Albums</h1>
        <Card.Title>My Top 5</Card.Title>
          <Card.Text>
          <ol>
                <li>Currents</li>
                <li>Lonerism</li>
                <li>InnerSpeaker</li>
                <li>Live Versions</li>
                <li>The Slow Rush</li>
            </ol>
          </Card.Text>
          <Card.Title>Spotify Top 5</Card.Title>
          <Card.Text>
          <ol>
                <li>Currents</li>
                <li>The Slow Rush</li>
                <li>Lonerism</li>
                <li>InnerSpeaker</li>
                <li>Live Versions</li>
            </ol>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default Albums; 