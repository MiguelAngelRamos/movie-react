import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Movies</div>
      <form>
        <input 
          type="text"
          placeholder='Buscar Películas'
          />
         <button type="submit">Buscar</button>
      </form>
    </nav>
  )
}

export default Navbar;