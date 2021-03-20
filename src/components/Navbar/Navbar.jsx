import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = ({ currentUser, logout }) => {
    return (
        <nav className="nav d-flex justify-content-between">
            <section className="nav__links">
                <Link className="nav__link" to="/">Home</Link>
                <Link className="nav__link" to="/about">About</Link>
                <Link className="nav__link" to="/explore">Explore</Link>
            </section>
            <section className="nav__user">
                {/* if currentUser is found (localStorage's uid), display user dropdown. If not, show login button */}
                {
                    currentUser ? 
                    (
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                username
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