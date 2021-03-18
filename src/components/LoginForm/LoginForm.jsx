import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import User from "../../Models/User";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe]=useState(false);

  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();

    submitLoginData();
  };

  // TODO Local Storage function to store userId if contact has checked "remember me" on login form 
  // const lsRememberMe


  const submitLoginData = async () => {
    try {
      const data = {
        username,
        password,
      };

      const res = await User.login(data);

      localStorage.setItem('uid', res.data.userJWT )

      history.push("/");
      
      window.location.reload(false)

    } catch (error) {

      return console.log(error);
    }
  };
  
  return (
    <div className="LoginForm">
      <Container>
        <h1>Log in to your Melophied Fan Account</h1>

        <Form onSubmit={loginHandler}>
          <Form.Group controlId="username">
            <Form.Label>Username or Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username or email"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="rememberMe" type="checkbox"
              name="rememberMe">
            <Form.Label>Remember Me</Form.Label>
            <Form.Control
              type="checkbox"
              name="rememberMe"
              value={rememberMe}
              onChange={(e) => {
                setRememberMe(!rememberMe);
                
              }}
            />
          </Form.Group>


          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <p>
          Don't have a Melophied account?
          <Link to="/register">Register here</Link>
        </p>
      </Container>
    </div>
  );
};

export default LoginForm;
