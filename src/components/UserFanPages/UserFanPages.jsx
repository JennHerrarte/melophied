import {Container, Image, Row, Col} from 'react-bootstrap'
import './UserFanPages.css'
import {Link} from 'react-router-dom'

const UserFanPages = ({recentUserPages}) => {
console.log(recentUserPages)
    return (
        <div>
        <h1 class='myFanPages'>My Fan Pages</h1>
     

           <Container className='UserFanPages'>
                <Row className='row'>
              
                {
               recentUserPages.map((page, idx) => {
                return(
                    <div className="ArtistDiv">
                    <Link className="pageLink" to={`/fanpage/${page._id}`} ><Image className='artistAvatar' src={page.artistData.artistImage} rounded /></Link> 
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
