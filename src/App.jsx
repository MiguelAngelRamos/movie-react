import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { buscarPeliculas } from './services/peliculas-service';
function App() {
 
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await buscarPeliculas(query);
      setSearchResult(results);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Router>
      <Navbar onSearch={handleSearch}/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>  
  )
}

export default App;
