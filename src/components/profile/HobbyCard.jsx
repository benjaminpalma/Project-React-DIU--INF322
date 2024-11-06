import React from 'react';
import { useNavigate } from 'react-router-dom';
import Imagen from '../../assets/imagen.png';

const HobbyCard = ({ key, title, description, link }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(link);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 flex items-center cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      <div className="flex-shrink-0 w-1/3 mr-6 flex items-center justify-center">
        <img src={Imagen} height={130} alt='Hobby icon' className="w-2/3 h-2/4 object-contain" />
      </div>
      <div className="flex-grow w-2/3 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        <button className="ml-4 text-gray-500 hover:text-red-500 focus:outline-none" onClick={(e) => { e.stopPropagation(); }}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default HobbyCard;
