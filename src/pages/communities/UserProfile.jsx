import React from 'react';
import { useParams } from 'react-router-dom';
import posts from './PostData';

const UserProfile = () => {
  const { username } = useParams(); // Obtenemos el nombre de usuario desde la URL

  // Filtrar para obtener el perfil de usuario desde los datos del post de ejemplo
  const userPost = posts.find((post) => post.author.name.replace(/\s+/g, '-').toLowerCase() === username.toLowerCase());

  // Si el usuario no existe, mostramos un mensaje de error
  if (!userPost) {
    return <div>Usuario no encontrado</div>;
  }

  const { author } = userPost;
  
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">

          <img src={author.imageUrl} alt={author.name} className="w-24 h-24 rounded-full" />

          <div>
            <h2 className="text-2xl font-semibold">{author.name}</h2>
            <p className="text-gray-600">{author.role}</p>
            <p className="mt-2 text-gray-500">{author.description}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Comunidades</h3>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">{userPost.category}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;