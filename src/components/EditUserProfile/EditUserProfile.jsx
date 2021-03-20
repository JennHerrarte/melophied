import {Button} from 'react-bootstrap'

// on edit button click, allow user to edit username / top 5 artists 
const editProfileHandler = () => {
    
}

const EditUserProfile = ({username}) => {

    return (
        <Button onClick={editProfileHandler}>Edit</Button>
    )
}

export default EditUserProfile;