import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './App.css';
import Routes from '../../config/router'
import Navbar from '../../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [ currentUser, setCurrentUser ] = useState( localStorage.getItem('uid') );
  const history = useHistory()

  const logout = () => {

    localStorage.removeItem('uid')

    setCurrentUser(localStorage.getItem('uid'))
    history.push('/');

  }

  

  return (
    <div className="App container">
      <Navbar currentUser={ currentUser } logout={ logout } />
      <main>
        <Routes currentUser={ currentUser }
          setCurrentUser={ setCurrentUser } />  
      </main>
    </div>
  );
}

export default App;
