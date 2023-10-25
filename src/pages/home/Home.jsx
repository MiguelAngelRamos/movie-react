import React, { useState, useEffect } from 'react';
import './home.css';
import { getPeliculasPopulares } from '../../services/peliculas-service';

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchPeliculas = async () => {
    const data = await getPeliculasPopulares();
    setPeliculas(data.results);
    };
    fetchPeliculas();
  },[])
  return (
    <div className="home-page">
      <PeliculasPoster/>
    </div>
  )
}

export default Home

//* rafce