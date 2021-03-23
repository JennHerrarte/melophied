import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const EditUserProfile = ({username, userData}) => {

  

    return(
    <>
    {
        username === userData.username ?
        <div className="EditProfile">
           <Link to={`/profile/${userData._id}/edit`}>
        <Button 
        variant="outline-warning">Edit</Button>
        </Link>
        </div>
        :
        ''
    }
    </>
    )
};


export default EditUserProfile;


