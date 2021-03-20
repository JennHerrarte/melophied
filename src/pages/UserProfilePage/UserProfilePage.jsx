import {useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'

const UserProfilePage = ({currentUser}) => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        // decode username and set it as current username
        if (currentUser) setUsername(jwtDecode(currentUser).username)
    }, [currentUser])

    return (
        <h1>{username}</h1>
    )
}

export default UserProfilePage;