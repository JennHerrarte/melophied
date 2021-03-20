import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Spotify from '../../services/spotify'
import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'

const HomePage = ({currentUser}) => {

        const [token, setToken] = useState('')

        // fetch spotify token when the home page loads
        useEffect(() => {
            fetchToken()
        }, [])

        // feth spotify token and set it to token state
        const fetchToken = async () => {

            const res = await Spotify.getToken()

            setToken(res.data.access_token)
        }     
        
    return (
        <div className="HomePage">
            <h1>Hello World!</h1>
            <p>These are my top 5 fan pages</p>
            <FanPageCardsContainer/>
            <Button className="exploreButton">Explore</Button>
            <section>
                {/* if currentUser is found (localStorage's uid), will be routed to create page. If not, will be routed to login */}
                {
                    currentUser ? 
                    (
                        <Link to="/create">
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