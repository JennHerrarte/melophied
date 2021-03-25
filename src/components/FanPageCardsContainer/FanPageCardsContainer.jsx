import {useState, useEffect} from 'react'
import FanPageAPI from '../../Models/FanPageAPI'
import {Card, Button} from 'react-bootstrap'
import FanPageCard from  '../FanPageCard/FanPageCard'
import {Link} from 'react-router-dom'
import './FanPageCardsContainer.css'

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
        <h1>Current Top Five Fan Pages</h1>
        <div className='FanPageCardsContainer-cards'>
             
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
               
              
            </div>
        </div>
    )   
}

export default FanPageCardsContainer;