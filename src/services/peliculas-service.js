const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0ffa38e5464cf85244a57b5a7724bd12';

export const getPeliculasPopulares = async () => {
 
 try {
  //* alt + 96 
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  if(!response.ok) {
    throw new Error(`Http error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
 } catch (error) {
   console.log('Error en la petición',  error);
   return null;
 }
};

export const buscarPeliculas = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    // console.log(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;

  } catch (error) {
    console.error('Error buscando peliculas' + error);
    return null;
  }
}

export const getPeliculaDetalle = async (movieId) => {
  try {
    //* https://api.themoviedb.org/3/movie/838147?api_key='34141341jfkejf1fi3o'
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    console.log(response);
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

