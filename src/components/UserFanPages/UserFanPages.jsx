import {Container, Image, Row, Col} from 'react-bootstrap'
import './UserFanPages.css'
import {Link} from 'react-router-dom'

const UserFanPages = ({recentUserPages}) => {
console.log(recentUserPages)
    return (
        <div>
        <h1>My fan pages</h1>
     

           <Container className='UserFanPages'>
                <Row className='row'>
              
                {
               recentUserPages.map((page, idx) => {
                return(
                    <div className="ArtistDiv">
                    <Image className='artistAvatar' src={page.artistData.artistImage} rounded />
                    <Link className="pageLink" to={`/fanpage/${page._id}`} key={idx}>{page.pageTitle}</Link>
                    </div>
                    ) 
               })
            }
           
            </Row>
            </Container>
        
          
        </div>
    )
}

export default UserFanPages;
