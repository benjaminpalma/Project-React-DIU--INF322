import React, { useState } from 'react';
import PostCard from './PostCard';
import posts from './PostData';

const Communities = () => {
  const [searchText, setSearchText] = useState('');

  // Función para manejar el clic en "Agregar Comunidad"
  const handleAddCommunity = () => {
    alert('Creando comunidad');
  };

  // Función para manejar cambios en el campo de búsqueda
  const handleSearchChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
  };

  // Función para buscar comunidades
  const handleSearch = () => {
    alert(`Buscando comunidad: '${searchText}'`);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-16 left-0 right-0 z-10 flex items-center justify-between bg-white shadow px-6 py-4 border-b border-gray-200">
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={handleAddCommunity}
        >
          Agregar Comunidad +
        </button>
        <input
          type="text"
          placeholder="Busca comunidades"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchText}
          onChange={handleSearchChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') handleSearch();
          }}
        />
      </div>

      <div className="mt-20 mx-auto grid max-w-2xl grid-cols-1 gap-y-8 border-t border-gray-200 pt-10 sm:mt-24 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Communities;
