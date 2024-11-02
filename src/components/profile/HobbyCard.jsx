import React from 'react';

import Imagen from '../../assets/imagen.png'

const HobbyCard = ({ title, description }) => {
  return (
    <div className="hobby__card">
      <div className="hobby__icon">
        <img src={Imagen} height={130} alt='Hobby icon' />
      </div>
      <div className="hobby__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="hobby__separator"></div>
      <button className="deleteButton">✕</button>
    </div>
  );
}

export default HobbyCard;
