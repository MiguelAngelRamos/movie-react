import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { buscarPeliculas } from './services/peliculas-service';
import PeliculaDetail from './pages/detailsmovie/PeliculaDetail';
import NotFound from './pages/notfound/NotFound';
function App() {
 
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    //* query = rocky
    try {
      const results = await buscarPeliculas(query);
      setSearchResults(results);
      // console.log(searchResults);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <Navbar onSearch={handleSearch}/>
      {/* http://localhost:5173/pelicula-detail/39384 */}
      <Routes>
        {/* <Route path="/pelicula-detail/:id/:name" element={<PeliculaDetail />}/> */}
        <Route path="/pelicula-detail/:id" element={<PeliculaDetail />}/>
        <Route path="/" element={<Home searchResults={searchResults} />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>  
  )
}

export default App;
