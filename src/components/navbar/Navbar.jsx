import React, { useState } from 'react';
import './navbar.css';
const Navbar = ({onSearch}) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('HandleSubmit')
    console.log(searchTerm);
    onSearch(searchTerm);
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Movies</div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Buscar Películas'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
         <button type="submit">Buscar</button>
      </form>
    </nav>
  )
}

export default Navbar;