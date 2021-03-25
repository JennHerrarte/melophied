import {useState, useEffect} from 'react'
import FanPageAPI from '../../Models/FanPageAPI'
import {Card, Button} from 'react-bootstrap'
import FanPageCard from  '../FanPageCard/FanPageCard'
import {Link} from 'react-router-dom'

const FanPageCardsContainer = () => {

  const [topFiveFanPages, setTopFiveFanPages]=useState([])

    useEffect(() => {
        
        fetchTopFiveFanPages()

    }, [])

    const fetchTopFiveFanPages = async () => {
        const res = await FanPageAPI.topFive()

        setTopFiveFanPages(res.data.topFivePages)
    }


    return(
        <div className='FanPageCardsContainer'>
              <ul>
                {
                    topFiveFanPages.map((page, idx) => {
                        return(

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={page._id.artistData.artistImage} />
                                <Card.Body>
                                <Card.Title>{page._id.artistData.name}</Card.Title>
                                <Card.Text>
                                    {page._id.pageTitle}
                                </Card.Text>
                                <Link to={`/fanpage/${page._id}`}>
                                    <Button variant="primary">Visit Fan Page</Button>
                                </Link>
                                </Card.Body>
                            </Card>
                            

                        )
                    })
                }
               
            </ul>  
        </div>
    )   
}

export default FanPageCardsContainer;