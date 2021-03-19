import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import User from '../../Models/User';
import './RegistrationForm.css';


const RegistrationForm = () => {

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [verifiedPassword, setVerifiedPassword]=useState('')

    const history = useHistory();
    
    const registrationHandler = (e) => {

        e.preventDefault()

        if (password !== verifiedPassword) {
            return console.log('passwords do not match');

        }
  
        submitRegistrationData()
      }
  
      const submitRegistrationData = async () => {
  
        try {
  
          const data = {
            firstName,
            lastName,
            email,  
            username,
            password, 
            verifiedPassword
          }

          await User.register(data)
  
          history.push('/login');
  
        } catch (error) {
  
          return console.log(error);
  
        }
  
      }

    return (
        <>
        {/* <Container>
        <h1>Register for a Melophied Fan Account</h1>

        <Form onSubmit={registrationHandler}>

        <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="firstName" onChange={(e) => {setFirstName(e.target.value)}}/>
        </Form.Group>

        <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={(e) => {setLastName(e.target.value)}}/>
        </Form.Group>

        <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" onChange={(e) => {setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        
        <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name="username" onChange={(e) => {setUsername(e.target.value)}} />
        </Form.Group>

        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
        </Form.Group>

        <Form.Group controlId="verifiedPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="verifiedPassword" onChange={(e) => {setVerifiedPassword(e.target.value)}}/>
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>

        </Form>
       
        <p>
        Already have a Melophied account? 
        <Link to="/login">Log in here</Link>
        </p>

        </Container> */}

        <div className="outer">
        <div className="inner">
        <form onSubmit={registrationHandler}>
        <h3>Register</h3>
        <div className="form-group firstName">
                    <label>First name</label>
                    <input type="text" className="form-control" name="firstName"placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}}/>
                </div>

                <div className="form-group lastName">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}}/>
                </div>

                <div className="form-group email">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>
                </div>

                <div className="form-group username">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Create username" name="username" onChange={(e) => {setUsername(e.target.value)}}/>
                </div>

                <div className="form-group password">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div className="form-group verifiedPassword">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" name="verifiedPassword" onChange={(e) => {setVerifiedPassword(e.target.value)}}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">log in?</Link>
                </p>
            </form>
            </div>
            </div>
        
</> 
    )
}

export default RegistrationForm;