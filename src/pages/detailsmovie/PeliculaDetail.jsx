import React from 'react'
import { useParams } from 'react-router-dom';
const PeliculaDetail = () => {
  const {id} = useParams();

  return (
    <div>PeliculaDetail: {id} </div>
  )
}

export default PeliculaDetail