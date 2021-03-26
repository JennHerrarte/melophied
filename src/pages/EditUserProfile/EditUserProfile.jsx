import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import UserAPI from '../../Models/UserAPI';
import jwtDecode from 'jwt-decode'
import './EditUserProfile.css'

const EditUserProfile = ({currentUser, setCurrentUser}) => {
    
    const [username, setUsername]=useState('')
    const [ userData, setUserData] = useState([])
    const history = useHistory()

    useEffect(() => {
       
        fetchUserData(currentUser);

    }, [])

    const fetchUserData = async (token) => {
        const res = await UserAPI.profile(token)
        setUserData(res.data.foundUser)
        setUsername(res.data.foundUser.username)
     
    } 

    const changeUsernameHandler = (e) => {
        e.preventDefault()
        changeUsername()
      }
  
    const changeUsername = async () => {
        
        try {
            const data = {
                username
            }

            const res = await UserAPI.updateProfile(userData._id, currentUser, data)
  
            setUserData(res.data.updatedUser)
            
            localStorage.setItem('uid', res.data.userJWT )

            setCurrentUser(localStorage.getItem('uid'))

            history.push('/profile')
  
        } catch (error) {
  
          return console.log(error);
  
        }
        
    }

    return(
        <>
        <main className="ChangeUsernameForm">
        <div className="outer">
        <div className="inner">
        <form onSubmit={changeUsernameHandler}>
        <h3>Changing your username?</h3>
        <p>Enter your new one below:</p>
                <div className="form-group username">
                    <label>Username:</label>
                    <input type="text" className="form-control" value={username} name="username" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Save</button>
                <Link to="/profile"><button type="submit" className="btn btn-danger">Cancel</button></Link>
        </form>
        </div>
        </div>
        </main>
        </> 
    )
};


export default EditUserProfile;



