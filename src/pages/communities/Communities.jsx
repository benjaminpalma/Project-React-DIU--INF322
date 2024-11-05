import React, { useState } from 'react';
import PostCard from './PostCard';
import posts from './PostData';
import Navbar from '../../components/Navbar'

const Communities = () => {
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [isModerator, setIsModerator] = useState(false);

  // Función para mostrar el modal de "Agregar Comunidad"
  const handleAddCommunity = () => {
    setShowModal(true);
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    const inputText = event.target.value;
    setSearchText(inputText);
  };

  // Función para buscar comunidades
  const handleSearch = () => {
    alert(`Buscando comunidad: '${searchText}'`);
  };

  // Función para manejar el envío del formulario de nueva comunidad
  const handleCreateCommunity = () => {
    if (categoryName.trim()) {
      alert(`Comunidad '${categoryName}' creada con éxito. Tú serás el moderador.`);
      setShowModal(false);
      setCategoryName('');
      setIsModerator(false);
    } else {
      alert("Por favor, ingresa un nombre de categoría.");
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
      {/* Barra superior ajustada */}
      <div className="fixed top-16 left-0 right-0 z-10 bg-white shadow border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-6 lg:px-8">
          <button
            className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-blue-600"
            onClick={handleAddCommunity}
          >
            Agregar Comunidad +
          </button>
          <input
            type="text"
            placeholder="Busca comunidades"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow ml-4"
            value={searchText}
            onChange={handleSearchChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') handleSearch();
            }}
          />
        </div>
      </div>

      {/* Listado de comunidades */}
      <div className="mt-5 mx-auto grid max-w-2xl grid-cols-1 gap-y-8 pt-10 sm:mt-20 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Modal de creación de comunidad */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Crear nueva comunidad</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nombre de la Categoría
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Ej. Tecnología, Libros, etc."
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="moderatorCheckbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={isModerator}
                onChange={() => setIsModerator(!isModerator)}
              />
              <label htmlFor="moderatorCheckbox" className="ml-2 block text-sm text-gray-700">
                Acepto ser el moderador de esta comunidad
              </label>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={handleCreateCommunity}
                disabled={!isModerator}
              >
                Crear Comunidad
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Communities;