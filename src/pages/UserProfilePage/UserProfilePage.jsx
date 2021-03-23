import {useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import UserFanPages from '../../components/UserFanPages/UserFanPages'
import UserTopArtists from '../../components/UserTopArtists/UserTopArtists'
import EditUserProfile from '../../components/EditUserProfile/EditUserProfile'
import './UserProfilePage.css'
import UserAPI from '../../Models/UserAPI'

const UserProfilePage = ({currentUser}) => {

    const [username, setUsername] = useState('')
    const [ userData, setUserData] = useState([])
    const [ recentUserPages, setRecentUserPages] = useState([])
    const [ userTopArtists, setUserTopArtists] = useState([])
  

    useEffect(() => {
        // decode username and set it as current username
        if (currentUser) setUsername(jwtDecode(currentUser).username)
    }, [currentUser])

    useEffect(() => {
        
        fetchUserData()

    }, [])

    const fetchUserData = async () => {
        const res = await UserAPI.profile(currentUser)

        setUserData(res.data.foundUser)
        setRecentUserPages(res.data.foundUser.recentPages)
        setUserTopArtists(res.data.foundUser.userTopArtists)
     
    }


    return (
    <div className="UserProfilePage">
        <h1 className="username">{username}</h1>
        <EditUserProfile username={username} userData={userData} />
        <UserFanPages className="UserFanPages" recentUserPages={recentUserPages} />
        <UserTopArtists className="UserTopArtists" userTopArtists={userTopArtists}/>
    </div>
    )
}

export default UserProfilePage;