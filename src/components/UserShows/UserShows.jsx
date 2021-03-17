import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'

const UserShows = () => {
    return(
        <Card style={{ width: '25rem', height: '40rem' }}>
        <Card.Body>
          <h1 className='maincardtitle'>Concerts</h1>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <ul>
                <li>OutsideLands</li>
                <li>OutsideLands</li>
                <li>OutsideLands</li>
                <li>OutsideLands</li>
                <li>OutsideLands</li>
                <li>OutsideLands</li>
                <li>OutsideLands</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default UserShows; 