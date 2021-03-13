import './App.css';
import Routes from '../../config/router'
import Navbar from '../../components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
