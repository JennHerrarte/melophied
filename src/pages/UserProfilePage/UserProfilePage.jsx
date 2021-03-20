import {useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import UserFanPages from '../../components/UserFanPages/UserFanPages'
import UserTopArtists from '../../components/UserTopArtists/UserTopArtists'
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile'
import './UserProfilePage.css'


const UserProfilePage = ({currentUser}) => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        // decode username and set it as current username
        if (currentUser) setUsername(jwtDecode(currentUser).username)
    }, [currentUser])

    

    return (
    <div className="UserProfilePage">
        <h1 className="username">{username}</h1>
        <EditUserProfile  className="editButton" username={username}/>
        <UserFanPages className="UserFanPages"/>
        <UserTopArtists className="UserTopArtists"/>
    </div>
    )
}

export default UserProfilePage;