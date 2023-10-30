import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
function App() {
 
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    
  }
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>  
  )
}

export default App;
