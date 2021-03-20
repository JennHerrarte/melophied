import {Button} from 'react-bootstrap'
import User from '../../Models/User'

// on edit button click, allow user to edit username / top 5 artists 
const editProfileHandler = () => {
    
    
}

const EditUserProfile = ({username}) => {

    return (
        <Button onClick={editProfileHandler}>Edit </Button>
    )
}

export default EditUserProfile;