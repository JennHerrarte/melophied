// on edit button click, allow user to edit username / top 5 artists 
const editProfileHandler = () => {
    console.log('edit clicked')
}

const EditUserProfile = ({username}) => {

    return (
        <button onClick={editProfileHandler}>Edit</button>
    )
}

export default EditUserProfile;