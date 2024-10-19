// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <h2>Menú</h2>
      <ul>
        <li><Link to="/Hobbies/Hobbies">Hobbies</Link></li>
        <li><Link to="/Hobbies/create-hobby">Crear Hobbie</Link></li>
        <li><Link to="/Profile/Settings">Perfil</Link></li>
        <li><Link to="/communities/communities">Comunidades</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;