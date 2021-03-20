import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Spotify from '../../services/spotify'
import FanPageCardsContainer from '../../components/FanPageCardsContainer/FanPageCardsContainer'
import FanPageAPI from '../../Models/FanPageAPI'

const HomePage = ({currentUser}) => {

    // NOTE TESTING SPOTIFY SEARCH API, WILL NEED TO MOVE IT TO CREATEFANPAGE ONCE THE PAGE IS CREATED.

        // fetch token and store it into state (Will need to import useState, useEffect from react and Spotify class from services folder)
        const [token, setToken] = useState('')
        const [artists, setArtists] = useState([])
        const [allFanPages, setAllFanPages] = useState([])
        const [topFiveFanPages, setTopFiveFanPages]=useState([])

        // fetch spotify token when the home page loads
        useEffect(() => {
            fetchToken()
        }, [])

        // fetch artists matching search query when token is loaded
        useEffect(() => {
            if (token) {
                fetchArtists(token, 'Taylor Swift')
            }
        }, [token])

        // feth spotify token and set it to token state
        const fetchToken = async () => {

            const res = await Spotify.getToken()

            setToken(res.data.access_token)
        }

        // feth artist array from spotify and set it to artists state
        const fetchArtists = async (token, artist) => {
            const res = await Spotify.searchArtists(token, artist)

            setArtists(res.data.artists.items)
        }
        // -----------------------------------    
    
    // --------------------------------------------------------------------------------------------------------------------------------------------   
    
        useEffect(() => {
            fetchAllFanPages()
            fetchTopFiveFanPages()
        }, [])

        const fetchAllFanPages = async () => {
            const res = await FanPageAPI.all()
            setAllFanPages(res.data)
        }

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