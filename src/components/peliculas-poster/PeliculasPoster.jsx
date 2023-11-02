import { Link } from 'react-router-dom';
import './peliculas-poster.css';
//* rafce

const PeliculasPoster = ({ peliculas }) => {
  return (
    <div className="peliculas-grid">
      {peliculas.map(pelicula => (
        <div key={pelicula.id} className="pelicula-card">
          
          <Link to={`/pelicula-detail/${pelicula.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
          </Link>

          <h3>{pelicula.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default PeliculasPoster;