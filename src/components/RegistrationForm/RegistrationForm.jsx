import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Container} from 'react-bootstrap';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const RegistrationForm = () => {

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [password2, setPassword2]=useState('')

    const history = useHistory;
    
    const registrationHandler = (e) => {

        e.preventDefault()

        if (password !== password2) {
            return console.log('passwords do not match');
            // TODO check if there is a way to check passwords match before button submit? 
            // Will need a notification to alert user if passwords do not match
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
            password2
          }
  
          console.log('user data', data);
          
          // TODO 
          // await User.create(data)
  
          // TODO check if email or username already exists. if yes, return error

         
  
          history.push('/login');
  
        } catch (error) {
  
          return console.log(error);
  
        }
  
      }

    return (
        <>
        <Container>
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

        <Form.Group controlId="password2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="password2" onChange={(e) => {setPassword2(e.target.value)}}/>
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

export default RegistrationForm;