import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import jwtDecode from 'jwt-decode'
import './Navbar.css'
import logo from './logo.png'

const Navbar = ({ currentUser, logout }) => {
    const [username, setUsername] = useState('')

    useEffect(() => {
        // decode username and set it as current username
        if (currentUser) setUsername(jwtDecode(currentUser).username)
    }, [currentUser])

    return (
        <nav className="nav">
            
            <section className="nav__links">
            <Link to="/"><img className='nav-logo' src={logo}/></Link>
            <Link className="nav__link" to="/">Melophied</Link>
                <Link className="nav__link" to="/">Home</Link>
                <Link className="nav__link" to="/about">About</Link>
                <Link className="nav__link" to="/explore">Explore</Link>
                <Link className="nav__link" to="/fanpage/create">Create</Link>
            </section>
            <section className="nav__user">
                {/* if currentUser is found (localStorage's uid), display user dropdown. If not, show login button */}
                {
                    currentUser ? 
                    (
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {username}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item onClick={ logout }>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : 
                    (
                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                    )
                }
            </section>
        </nav>
    )
}

export default Navbar 