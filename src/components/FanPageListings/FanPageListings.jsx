import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './FanPageListings.css'

const FanPageListings = ({allFanPages}) => {

    return(
        <div className='FanPageListings'>
        <h1>Explore All Fan Pages</h1>
            <div className='FanPageListingsCard'>
            {
                    allFanPages.map((page,idx) => {
                        return(
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={page.artistData.artistImage} />
                                <Card.Body>
                                <Card.Title>{page.artistData.name}</Card.Title>
                                <Card.Text>
                                    {page.pageTitle}
                                </Card.Text>
                                <Link to={`/fanpage/${page._id}`}>
                                    <Button variant="primary">Visit Fan Page</Button>
                                </Link>
                                </Card.Body>
                            </Card>
                        )
                        
                    })
                }
            </div>    
        </div>
    )
}


export default FanPageListings;