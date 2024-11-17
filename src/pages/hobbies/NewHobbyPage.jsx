import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ObjetivosYLogrosCard from '../../components/profile/ObjetivosYLogrosCard';
import { v4 as uuidv4 } from 'uuid';

const NuevoHobbiePage = () => {
  const [hobbyName, setHobbyName] = useState("");
  const [hobbyDescription, setHobbyDescription] = useState("");
  const [hobbyImage, setHobbyImage] = useState(null);
  const [currentSection, setCurrentSection] = useState('objetivos');
  const [objetivosData, setObjetivosData] = useState([]);
  const [logrosData, setLogrosData] = useState([]);

  const navigate = useNavigate();

  const handleEliminarObjetiveOLogro = (id) => {
    if (currentSection === 'objetivos') {
      setObjetivosData(objetivosData.filter(objetivo => objetivo.id !== id)); 
    } else {
      setLogrosData(logrosData.filter(logro => logro.id !== id));
    }
  };

  const handleHobbyImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHobbyImage(file);
    }
  };

  const handleAccept = () => {
    const newEntry = {
      id: uuidv4(),
      title: '',
      description: '',
      tasks: [''],
      image: null
    };

    if (currentSection === 'objetivos') {
      setObjetivosData([...objetivosData, newEntry]);
    } else {
      setLogrosData([...logrosData, newEntry]);
    }    
  };

  const handleNavClick = (type) => {
    setCurrentSection(type);
  };

  const handleSaveAndContinue = () => {
    const hobbyData = {
      hobbyName,
      hobbyDescription,
      hobbyImage,
      objetivosData,
      logrosData
    };
    // Navigate to hobbies page with the hobby data as state
    navigate('/hobbies', { state: { newHobby: hobbyData } });
  };

  const handleCardChange = (updatedCard) => {
    console.log('Update Card:', updatedCard);
    if (currentSection === 'objetivos') {
      setObjetivosData(objetivosData.map(objetivo => objetivo.id === updatedCard.id ? updatedCard : objetivo));
      console.log('objetivo list: ', objetivosData);
    } else {
      setLogrosData(logrosData.map(logro => logro.id === updatedCard.id ? updatedCard : logro));
      console.log('logros list: ', logrosData);
    }
  };

  const NuevoNavBar = (
    <div className=" top-16 left-0 right-0 z-10 bg-white shadow border-b border-gray-200 py-4 px-6">
      <div className="space-x-4">
          <button 
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentSection === 'objetivos' ? 'bg-blue-100 text-blue-800 rounded-lg' : ''}`}
            onClick={() => handleNavClick('objetivos')}
          >
            Objetivos
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentSection === 'logros' ? 'bg-blue-100 text-blue-800 rounded-lg' : ''}`}
            onClick={() => handleNavClick('logros')}
          >
            Logros
          </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-2 mt-4 text-gray-900">Nuevo Hobbie</h1>
      <main className="flex-1 place-self-center p-4 w-full max-w-2xl space-y-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <label className="cursor-pointer">
                <input type="file" accept="image/*" onChange={handleHobbyImageUpload} className="hidden" />
                {hobbyImage ? (
                  <img src={URL.createObjectURL(hobbyImage)} alt="Cargar imagen" className="w-32 h-32 object-cover rounded-md" />
                ) : (
                  <img src="https://via.placeholder.com/100" alt="Cargar imagen" className="w-32 h-32 object-cover rounded-md" />
                )}
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
        {NuevoNavBar }
        <div className="mt-4 space-y-1">
          {currentSection === 'objetivos' && (
            objetivosData.length === 0 ? (
              <p className="text-center text-gray-600">Aún no has creado un objetivo, presiona en el botón de abajo para agregar uno nuevo!</p>
            ) : (
              objetivosData.map((card) => (
                <ObjetivosYLogrosCard 
                  key={card.id} 
                  onDelete={() => handleEliminarObjetiveOLogro(card.id)}
                  data={card}
                  onChange={handleCardChange}
                />
              ))
            )
          )}
          {currentSection === 'logros' && (
            logrosData.length === 0 ? (
              <p className="text-center text-gray-600">Aún no has creado un logro, presiona en el botón de abajo para agregar uno nuevo!</p>
            ) : (
              logrosData.map((card) => (
                <ObjetivosYLogrosCard 
                  key={card.id} 
                  onDelete={() => handleEliminarObjetiveOLogro(card.id)}
                  data={card}
                  onChange={handleCardChange}
                />
              ))
            )
          )}
        </div>
        <div className="my-6 border-t border-gray-300"></div>
        <button 
          className="w-12 h-12 bg-indigo-600 text-white rounded-full text-2xl flex items-center justify-center mx-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          onClick={handleAccept}
        >
          +
        </button>
        <button 
          className="mt-6 w-full bg-green-600 text-white py-3 rounded-md text-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500" 
          onClick={handleSaveAndContinue}
        >
          Guardar y Continuar
        </button>
      </main>
    </div>
  );
};

export default NuevoHobbiePage;
