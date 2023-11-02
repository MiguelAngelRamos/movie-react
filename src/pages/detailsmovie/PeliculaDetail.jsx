import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPeliculaDetalle } from '../../services/peliculas-service';
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
    <>
     <h1>Titulo de la pelicula: {peliculaDetail.title}</h1>
     <img src={`https://image.tmdb.org/t/p/w500${peliculaDetail?.poster_path}`} alt={peliculaDetail.title} />
     <p>{peliculaDetail.overview}</p>
    </>
   
  )
}

export default PeliculaDetail