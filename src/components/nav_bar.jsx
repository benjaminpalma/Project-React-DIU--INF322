import React from 'react';
import { NavLink } from 'react-router-dom'; // Usando NavLink de React Router

const navLinkClass = ({ isActive }) => {
  const classes = ['navbar__link'];
  if (isActive) classes.push('navbar__link--active');
  return classes.join(' ');
}

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="navbar__logo-text">Logo</div>
      </div>
      <div className="navbar__links">
        <NavLink to="/hobbies" className={navLinkClass}>Hobbies</NavLink>
        <NavLink to="/comunidades" className={navLinkClass}>Comunidades</NavLink>
        <NavLink to="/buscador" className={navLinkClass}>Buscador</NavLink>
      </div>
      <div className="navbar__profile">
        <button className="navbar__profile-button">Perfil</button>
      </div>
    </nav>
  );
}

export default NavBar;
