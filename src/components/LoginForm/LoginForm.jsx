import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserAPI from "../../Models/UserAPI";
import './LoginForm.css'

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe]=useState(false);
  const [error, setError]=useState(null);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.username && localStorage.rememberMe) {
      setUsername(localStorage.getItem('username'))
      setRememberMe(localStorage.getItem('rememberMe'))
    }
  }, [])

  const loginHandler = (e) => {
    e.preventDefault();

    submitLoginData();
  };

  const submitLoginData = async () => {

    try {
      const data = {
        username,
        password,
      };

      if (rememberMe && username && password) {
        localStorage.setItem('username', username)
        localStorage.setItem('rememberMe', rememberMe)
      } else {
        localStorage.removeItem('username')
        localStorage.removeItem('rememberMe')
      }

      const res = await UserAPI.login(data);

      localStorage.setItem('uid', res.data.userJWT )

      history.push("/");
      
      window.location.reload(false)

    } catch (error) {
      setError('Incorrect username or password')
      return console.log(error);
      
    }
  };
  
  

    {/* <div className="LoginForm">
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
              value={username}
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
              checked={JSON.parse(rememberMe)}
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
    </div> */}

    return (
      <>
    <main className="LoginForm">
        <div className="outer">
        <div className="inner">
        <form onSubmit={loginHandler}>
        <h3>Log in to your Melophied account</h3>
        

                <div className="form-group username">
                    <label>Username or Email</label>
                    <input type="text" className="form-control" placeholder="Enter username or email" name="username" onChange={(e) => {setUsername(e.target.value)}} value={username}/>
                </div>

                <div className="form-group password">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" id="customCheck1"
                              className="custom-control-input"
                              name="rememberMe"
                              value={rememberMe}
                              checked={JSON.parse(rememberMe)}
                              onChange={(e) => {setRememberMe(!rememberMe)}}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                {
                  error ? 
                  <Alert variant="danger" onClose={() => setError(null)} dismissible>
                    <Alert.Heading>{error}</Alert.Heading>
                  </Alert> 
                  : ''
                }
                  
                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Don't have an account? <Link to="/register">register</Link>
                </p>
            </form>
            </div>
            </div>
        </main>
    </>
  )
};

export default LoginForm;
