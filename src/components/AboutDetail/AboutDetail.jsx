import './AboutDetail.css'
import logo from './logo.png'

const AboutDetail = () => {
    return(
        <>
            <img className='logo' src={logo}/>
            <h1 className="welcome">
            Welcome to Melophied!
            </h1>
            <br/>
            <p className="info">
            Melophied is the ultimate tribute to your favorite musical artists. We feel that each person has their own unique favorite songs and albums which get shadowed by other “top lists”. In Melophied you show the world what YOUR top 5 songs and albums are for each tribute artist page you create. You can even show details on concerts you have attended for that musical artist. Discover new songs by browsing other community created tribute fan pages. Explore other user’s favorite lists and compare with yours to find new content!
            </p>
            <br/>
            <div className="dev-team-detail">
                <p>
                    Melophied Dev Team:
                </p>
                <div className="dev-team-roster">
                    <ul>
                        Front End Team
                        <li>Jennifer Herrarte</li>
                        <li>Megan Matthews</li>
                        <li>Chuck Hyun Choi</li>
                    </ul>
                    <ul>
                        Back End Team
                        <li>Gregory Harper</li>
                        <li>Arifur Rahmen</li>
                        <li>Raul Rodriguez</li>
                    </ul>
                </div>
                
            </div>
            
        </>
    )
}

export default AboutDetail