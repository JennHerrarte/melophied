import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = () => {
    return (
        <nav className="nav d-flex justify-content-between">
            <section className="nav__links">
                <Link className="nav__link" to="/">Home</Link>
            </section>
            <section className="nav__user">
                {/* will need a conditional to check if a user is logged in or not -- props.currentUser ? 
                    if user is logged in, display dropdown. If not, display login button
                */}
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                {/* Will need to adjust logout dropdown option to clear localStorage -- localStorage.clear() */}
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        username
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            </section>
        </nav>
    )
}

export default Navbar 