import {useState, useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import UserFanPages from '../../components/UserFanPages/UserFanPages'
import UserAPI from '../../Models/UserAPI'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './UserProfilePage.css'

const UserProfilePage = ({currentUser}) => {
 
    const [username, setUsername] = useState('')
    const [ userData, setUserData] = useState([])
    const [ recentUserPages, setRecentUserPages] = useState([])

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
    }

    return (
    <div className="UserProfilePage">
        <h1 className="username">{username}</h1>
        <Link to={`/profile/edit`}><Button variant="outline-warning">Edit</Button></Link>
        <UserFanPages className="UserFanPages" recentUserPages={recentUserPages} />
    </div>
    )
}

export default UserProfilePage;