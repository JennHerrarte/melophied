import {useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import UserFanPages from '../../components/UserFanPages/UserFanPages'
import UserTopArtists from '../../components/UserTopArtists/UserTopArtists'
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile'

const UserProfilePage = ({currentUser}) => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        // decode username and set it as current username
        if (currentUser) setUsername(jwtDecode(currentUser).username)
    }, [currentUser])

    

    return (
    <div>
        <h1>{username}</h1>
        <EditUserProfile username={username}/>
        <UserFanPages/>
        <UserTopArtists/>
    </div>
    )
}

export default UserProfilePage;