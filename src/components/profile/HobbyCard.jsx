import React from 'react';
import { useNavigate } from 'react-router-dom';

const HobbyCard = ({ title, description, image, onDelete, onClick }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    onClick();
  };

  // nos aseguramos que sea un url
  const imageUrl = image instanceof File ? URL.createObjectURL(image) : image;

  return (
    <div
      className="bg-white rounded-lg shadow-md p-6 flex items-center cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      <div className="flex-shrink-0 mr-6">
        <label className="cursor-pointer">
          <img
            src={imageUrl}
            alt="Hobby icon"
            className="w-32 h-32 object-cover rounded-md"
          />
        </label>
      </div>
      <div className="flex-grow w-2/3 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        <button 
          className="ml-4 text-gray-500 hover:text-red-500 focus:outline-none" 
          onClick={(e) => { 
            e.stopPropagation(); 
            onDelete();
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default HobbyCard;
