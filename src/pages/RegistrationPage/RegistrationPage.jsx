import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const RegistrationPage = () => {

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const history = useHistory;
    
    const registrationHandler = (e) => {

        e.preventDefault()
  
        submitRegistrationData()
      }
  
      const submitRegistrationData = async () => {
  
        try {
  
          const data = {
            firstName,
            lastName,
            email,  
            username,
            password
          }
  
          console.log(data);
          
          // TODO
          // await User.login(data)
  
          // TODO check if email or username already exists. if yes, return error
  
          history.push('/')
  
        } catch (error) {
  
          return console.log(error);
  
        }
  
      }

    return (
        <>
        <Container>
        <h1>Register for a Melophied Fan Account</h1>

        <Form.Group controlId="confirm-password">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" name="firstName" onChange={(e) => {setFirstName(e.target.value)}}/>
        </Form.Group>

        <Form.Group controlId="confirm-password">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={(e) => {setLastName(e.target.value)}}/>
        </Form.Group>

        <Form.Group controlId="confirm-password">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" name="email" onChange={(e) => {setEmail(e.target.value)}} />
        </Form.Group>

        <Form onSubmit={registrationHandler}>
        <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name="username" onChange={(e) => {setUsername(e.target.value)}} />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => {setPassword(e.target.value)}} />
        </Form.Group>

        <Form.Group controlId="confirm-password">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirm-password" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>

        <p>
        Already have a Melophied account? 
        <Link to="/login">Log in here</Link>
        </p>

        </Container>
</> 
    )
}

export default RegistrationPage