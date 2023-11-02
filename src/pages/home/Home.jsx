import { useState, useEffect } from 'react';
import './home.css';
import { getPeliculasPopulares } from '../../services/peliculas-service';
import PeliculasPoster from '../../components/peliculas-poster/PeliculasPoster';

const Home = ({searchResults}) => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
    try {
      const data = await getPeliculasPopulares();
      setPeliculas(data.results);
    } catch (error) {
      console.log(error);
    }
    };
    fetchPeliculas();
  },[])

  useEffect(() => {
    if(searchResults?.length > 0) {
      setPeliculas(searchResults);
    }
  }, [searchResults]);
  return (
    <div className="home-page">
      <PeliculasPoster peliculas={peliculas}/>
    </div>
  )
}

export default Home

//* rafce