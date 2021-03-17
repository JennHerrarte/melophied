import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './App.css';
import Routes from '../../config/router'
import Navbar from '../../components/Navbar/Navbar'

function App() {

  const [ currentUser, setCurrentUser ] = useState( localStorage.getItem('uid') );
  const history = useHistory()

  const logout = () => {

    localStorage.clear()

    setCurrentUser(localStorage.getItem('uid'))
    history.push('/');

  }

  return (
    <div className="App">
      <Navbar currentUser={ currentUser } logout={ logout } />
      <main>
        <Routes currentUser={ currentUser }
          setCurrentUser={ setCurrentUser } />
      </main>
    </div>
  );
}

export default App;
