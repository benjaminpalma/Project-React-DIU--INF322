// CommunityPage.js
import React, { useState } from 'react';
import { useParams, Link  } from 'react-router-dom';
import communities from './CommunitieData';

const CommunityPage = () => {
  const { category } = useParams();
  const community = communities.find((c) => c.category.toLowerCase() === category.toLowerCase());

  const [isSubscribed, setIsSubscribed] = useState(false);

  // Función para manejar la suscripción
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  // Si no se encuentra la comunidad, muestra un mensaje de error
  if (!community) {
    return <div>La comunidad no fue encontrada.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{community.title}</h1>
        <p className="text-gray-700 mb-6">{community.description}</p>
        
        {/* Datos del moderador */}
        <Link to={`/profile/${community.moderator.name.replace(/\s+/g, '-').toLowerCase()}`} className="flex items-center mb-6">
          <img
            src={community.moderator.imageUrl}
            alt={community.moderator.name}
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{community.moderator.name}</p>
            <p className="text-gray-500">{community.moderator.role} (Moderador)</p>
          </div>
        </Link>

        {/* Información adicional de la comunidad */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">Suscriptores: {community.subscribers}</p>
          <button
            onClick={handleSubscribe}
            className={`px-4 py-2 text-white rounded-lg ${
              isSubscribed ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubscribed ? 'Desuscribirse' : 'Suscribirse'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;