import {useState, useEffect} from 'react'
import FanPageAPI from '../../Models/FanPageAPI'
import {Card, Image} from 'react-bootstrap'
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
                            
                            <Link to={`/fanpage/${page._id.id}`}>
                                <Image style={{ width: '15rem', height: '15rem', borderRadius: '50%'}} variant="top" src={page._id.artistData.artistImage} />
                                <Card style={{ width: '15rem', height: '11rem' , backgroundColor: 'transparent', border: 'none'}}>
                                <Card.Body>
                                <Card.Title >{page._id.artistData.name}</Card.Title>
                                <Card.Text>
                                    {page._id.pageTitle}
                                </Card.Text>
                                </Card.Body>
                                </Card>
                            </Link>
                            
                        )
                    })
                }
               
              
            </div>
        </div>
    )   
}

export default FanPageCardsContainer;