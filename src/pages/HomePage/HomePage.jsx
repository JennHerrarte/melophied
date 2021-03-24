import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'
import FanPageAPI from '../../Models/FanPageAPI'
import './HomePage.css'

const HomePage = ({currentUser}) => {

    const [topFiveFanPages, setTopFiveFanPages]=useState([])

    useEffect(() => {
        
        fetchTopFiveFanPages()

    }, [])

    const fetchTopFiveFanPages = async () => {
        const res = await FanPageAPI.topFive()

        setTopFiveFanPages(res.data.topFivePages)
    }

    return (
        <div className="HomePage">
            <h1>Welcome to Melophied</h1>
            <p>Top Five User Created Fan Pages</p>
            <div>
            <FanPageCardsContainer topFiveFanPages={topFiveFanPages}/>
            </div>
            <Link to="/explore">
            <Button className="exploreButton">Explore</Button>
            </Link>
            
            
            
                {/* if currentUser is found (localStorage's uid), will be routed to create page. If not, will be routed to login */}
                {
                    currentUser ? 
                    (
                        <Link to="/fanpage/create">
                            <Button>Create</Button>
                        </Link>
                    ) : 
                    (
                        <Link to="/login">
                            <Button>Create</Button>
                        </Link>
                    )
                }
               
        </div>
    )
}

export default HomePage