import './AboutDetail.css'
import logo from './updatedlogo.png'

const AboutDetail = () => {
    return(
        <>
            <img className='logo' src={logo}/>
            <h1 className="welcome">
            Welcome to Melophied!
            </h1>
            <br/>
            <p className="info">
            Melophied is the ultimate tribute to your favorite musical artists. We feel that each person has their own unique favorite songs and albums which get shadowed by other “top lists”. In Melophied you show the world what YOUR top 5 songs and albums are for each tribute artist page you create. Discover new songs by browsing other community created tribute fan pages. Explore other user’s favorite lists and compare with yours to find new content!
            </p>
            <br/>
            <div className="dev-team-detail">
                <p>
                    Melophied Dev Team:
                </p>
                <div className="dev-team-roster">
                    <ul>
                        Front End Team
                        <li><a href="https://www.linkedin.com/in/jenniferherrarte/">Jennifer Herrarte</a></li>
                        <li><a href="https://www.linkedin.com/in/meganmatthews44/">Megan Matthews</a></li>
                        <li><a href="https://www.linkedin.com/in/chuckchoi/">Chuck Hyun Choi</a></li>
                    </ul>
                    <ul>
                        Back End Team
                        <li><a href="https://www.linkedin.com/in/gregory-harper-71592067/">Gregory Harper</a></li>
                        <li><a href="https://www.linkedin.com/in/arifurrahma/">Arifur Rahman</a></li>
                        <li><a href="https://www.linkedin.com/in/raulirodriguez/">Raul Rodriguez</a></li>
                    </ul>
                </div>
                
            </div>
            
        </>
    )
}

export default AboutDetail