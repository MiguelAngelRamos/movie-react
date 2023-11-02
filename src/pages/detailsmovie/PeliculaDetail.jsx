import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPeliculaDetalle } from '../../services/peliculas-service';
import './pelicula-detail.css';

const PeliculaDetail = () => {

  const { id } = useParams();
  const [peliculaDetail, setPeliculaDetail] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getPeliculaDetalle(id);
      setPeliculaDetail(data);
    }

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="pelicula-container">
     <h1 className="pelicula-title">{peliculaDetail.title}</h1>
     <img
      className="pelicula-image" 
      src={`https://image.tmdb.org/t/p/w500${peliculaDetail?.poster_path}`} 
      alt={peliculaDetail.title} 
     />
     <p className="pelicula-overview">{peliculaDetail.overview}</p>
    </div>
   
  )
}

export default PeliculaDetail