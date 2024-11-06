import React, { useState } from 'react';
import Navbar from '../../components/Navbar'

const NuevoHobbiePage = () => {
  const [hobbyName, setHobbyName] = useState("");
  const [hobbyDescription, setHobbyDescription] = useState("");
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isObjective, setIsObjective] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setShowModal(false);
  };

  const [searchText, setSearchText] = useState('');

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

  const handleNavClick = (type) => {
    setIsObjective(type === 'objetivos');
  };

  // Nuevo navbar
  const NuevoNavBar = (
    <div className="fixed top-16 left-0 right-0 z-10 bg-white shadow border-b border-gray-200 py-4 px-6">
      <div className="space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={() => handleNavClick('objetivos')}>Objetivos</button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={() => handleNavClick('logros')}>Logros</button>
      </div>
    </div>
  );

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar/>
      {NuevoNavBar }
      <main className="flex-1 p-20">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <label className="cursor-pointer">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                <img src={image || "https://via.placeholder.com/100"} alt="Cargar imagen" className="w-32 h-32 object-cover rounded-md" />
                <span className="block mt-2 text-sm text-gray-500">Cargar imagen</span>
              </label>
            </div>
            <div className="flex-grow">
              <input 
                type="text" 
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Nombre del Hobbie" 
                value={hobbyName} 
                onChange={(e) => setHobbyName(e.target.value)}
              />
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Describe tu nuevo hobbie!" 
                value={hobbyDescription} 
                onChange={(e) => setHobbyDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-600">
          {isObjective ? "Aún no has creado un objetivo, presiona en el botón de abajo para agregar uno nuevo!" : "Aún no has creado un Logro, presiona en el botón de abajo para agregar uno nuevo!"}
        </p>
        <div className="my-6 border-t border-gray-300"></div>
        <button className="w-12 h-12 bg-indigo-600 text-white rounded-full text-2xl flex items-center justify-center mx-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleAddClick}>+</button>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-80">
              <h2 className="text-xl font-semibold mb-4">{isObjective ? "Nuevo Objetivo" : "Nuevo Logro"}</h2>
              <label className="block mb-4">
                <span className="block text-sm font-medium text-gray-700 mb-1">{isObjective ? "Objetivo:" : "Logro:"}</span>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder={`Nombre del ${isObjective ? 'objetivo' : 'logro'}`} />
              </label>
              <label className="block mb-4">
                <span className="block text-sm font-medium text-gray-700 mb-1">Tarea:</span>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Nombre tarea" />
              </label>
              <button className="w-10 h-10 bg-indigo-600 text-white rounded-full text-lg flex items-center justify-center mb-4 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">+</button>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" onClick={handleAccept}>Aceptar</button>
            </div>
          </div>
        )}
      </main>
    </div>
    </>
  );
};

export default NuevoHobbiePage;