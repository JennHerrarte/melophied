import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'
import FanPageAPI from '../../Models/FanPageAPI'

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
            <h1>Hello World!</h1>
            <p>These are my top 5 fan pages</p>
            <FanPageCardsContainer topFiveFanPages={topFiveFanPages}/>
            <Link to="/explore">
            <Button className="exploreButton">Explore</Button>
            </Link>
            
            
            <section>
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
            </section>    
        </div>
    )
}

export default HomePage