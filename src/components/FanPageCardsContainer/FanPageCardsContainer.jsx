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
        <h3>Current Top Five Fan Pages</h3>
        <div className='FanPageCardsContainer-cards'>
             
                {
                    topFiveFanPages.map((page, idx) => {
                        return(
                            
                            <Link to={`/fanpage/${page._id.id}`}>
                                <Image className="TopFiveImage" style={{ width: '12rem', height: '12rem', borderRadius: '50%', margin: '5px', padding: '5px'}} variant="top" src={page._id.artistData.artistImage} />
                                <Card className="TopFiveCard" style={{ width: '12rem', height: '8rem' , backgroundColor: 'transparent', border: 'none', justifyContent: 'center'}}>
                                <Card.Body>
                                <Card.Title style={{fontSize: '18px', textAlign: 'center'}}>{page._id.artistData.name}</Card.Title>
                                <Card.Text style={{fontSize: '14px', textAlign: 'center'}}>
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