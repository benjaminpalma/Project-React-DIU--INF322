import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ObjetivosYLogrosCard from '../../components/profile/ObjetivosYLogrosCard';
import AddButton from '../../components/profile/AddButton';
import { v4 as uuidv4 } from 'uuid';

const HobbyXPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hobbyData, setHobbyData] = useState({
    hobbyName: '',
    hobbyDescription: '',
    hobbyImage: null,
    objetivosData: [],
    logrosData: []
  });
  const [currentSection, setCurrentSection] = useState('objetivos');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  useEffect(() => {
    if (location.state && location.state.hobbyData) {
      // Si los datos están disponibles en location.state, usarlos
      setHobbyData(location.state.hobbyData);
      console.log('Hobby Data from location.state:', location.state.hobbyData);
    } else {
      console.log('No hobbyData found');
    }
  }, [location]);

  const handleNavClick = (type) => {
    setCurrentSection(type);
  };

  const handleEliminarObjetiveOLogro = (id) => {
    if (currentSection === 'objetivos') {
      setHobbyData((prevData) => ({
        ...prevData,
        objetivosData: prevData.objetivosData.filter((objetivo) => objetivo.id !== id),
      }));
    } else {
      setHobbyData((prevData) => ({
        ...prevData,
        logrosData: prevData.logrosData.filter((logro) => logro.id !== id),
      }));
    }
  };

  const handleAddObjetivoOLogro = () => {
    const newEntry = {
      id: uuidv4(),
      title: '',
      description: '',
      tasks: [''],
      image: null
    };

    if (currentSection === 'objetivos') {
      setHobbyData((prevData) => ({
        ...prevData,
        objetivosData: [...prevData.objetivosData, newEntry],
      }));
    } else {
      setHobbyData((prevData) => ({
        ...prevData,
        logrosData: [...prevData.logrosData, newEntry],
      }));
    }
  };

  const handleCardChange = (updatedCard) => {
    if (currentSection === 'objetivos') {
      setHobbyData((prevData) => ({
        ...prevData,
        objetivosData: prevData.objetivosData.map((objetivo) =>
          objetivo.id === updatedCard.id ? updatedCard : objetivo
        ),
      }));
    } else {
      setHobbyData((prevData) => ({
        ...prevData,
        logrosData: prevData.logrosData.map((logro) =>
          logro.id === updatedCard.id ? updatedCard : logro
        ),
      }));
    }
  };

  const handleEditName = () => {
    if (isEditingName) {
      // Save the edited name
      setHobbyData((prevData) => ({
        ...prevData,
        hobbyName: prevData.hobbyName.trim(),
      }));
    }
    setIsEditingName(!isEditingName);
  };

  const handleEditDescription = () => {
    if (isEditingDescription) {
      // Save the edited description
      setHobbyData((prevData) => ({
        ...prevData,
        hobbyDescription: prevData.hobbyDescription.trim(),
      }));
    }
    setIsEditingDescription(!isEditingDescription);
  };

  const handleNameChange = (e) => {
    setHobbyData((prevData) => ({
      ...prevData,
      hobbyName: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setHobbyData((prevData) => ({
      ...prevData,
      hobbyDescription: e.target.value,
    }));
  };

  if (!hobbyData) {
    return <p>Cargando datos del hobby...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-1 place-self-center p-4 w-full max-w-2xl space-y-2">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              {hobbyData.hobbyImage ? (
                <img
                  src={URL.createObjectURL(hobbyData.hobbyImage)}
                  alt="Hobby Imagen"
                  className="w-32 h-32 object-cover rounded-md"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/100"
                  alt="Hobby Imagen"
                  className="w-32 h-32 object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex-grow">
              <div className="flex items-center">
                {isEditingName ? (
                  <input
                    type="text"
                    value={hobbyData.hobbyName}
                    onChange={handleNameChange}
                    className="text-3xl font-bold text-gray-900 mb-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{hobbyData.hobbyName}</h1>
                )}
                {isEditingName ? (
                  <button onClick={handleEditName} className="ml-2 text-gray-500 hover:text-green-500">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-7 h-7 text-gray-500 hover:text-green-500'><path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4' /></svg>
                  </button>
                ) : (
                  <button onClick={handleEditName} className="ml-2 text-gray-500 hover:text-indigo-500">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 text-gray-500 hover:text-indigo-500'><path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536m-2.036-4.536a1.5 1.5 0 112.121 2.121L7.5 19.5H4v-3.5l11.732-11.732z' /></svg>
                  </button>
                )}
              </div>
              <div className="flex items-center mt-2">
                {isEditingDescription ? (
                  <textarea
                    value={hobbyData.hobbyDescription}
                    onChange={handleDescriptionChange}
                    className="text-lg text-gray-700 border-b border-gray-300 focus:outline-none focus:border-indigo-500 w-full"
                  />
                ) : (
                  <p className="text-lg text-gray-700">{hobbyData.hobbyDescription}</p>
                )}
                {isEditingDescription ? (
                  <button onClick={handleEditDescription} className="ml-2 text-gray-500 hover:text-green-500">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 text-gray-500 hover:text-green-500'><path strokeLinecap='round' strokeLinejoin='round' d='M9 12l2 2 4-4' /></svg>
                  </button>
                ) : (
                  <button onClick={handleEditDescription} className="ml-2 text-gray-500 hover:text-indigo-500">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 text-gray-500 hover:text-indigo-500'><path strokeLinecap='round' strokeLinejoin='round' d='M15.232 5.232l3.536 3.536m-2.036-4.536a1.5 1.5 0 112.121 2.121L7.5 19.5H4v-3.5l11.732-11.732z' /></svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="top-16 left-0 right-0 z-10 bg-white shadow border-b border-gray-200 py-4 px-6">
          <div className="space-x-4">
            <button
              className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg ${currentSection === 'objetivos' ? 'bg-sky-200 text-sky-700' : ''}`}
              onClick={() => handleNavClick('objetivos')}
            >
              Objetivos
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg ${currentSection === 'logros' ? 'bg-sky-200 text-sky-700' : ''}`}
              onClick={() => handleNavClick('logros')}
            >
              Logros
            </button>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          {currentSection === 'objetivos' &&
            (hobbyData.objetivosData.length === 0 ? (
              <p className="text-center text-gray-600">
                Aún no has creado un objetivo, presiona en el botón de abajo para agregar uno nuevo!
              </p>
            ) : (
              hobbyData.objetivosData.map((card) => (
                <ObjetivosYLogrosCard
                  key={card.id}
                  onDelete={() => handleEliminarObjetiveOLogro(card.id)}
                  data={card}
                  onChange={handleCardChange}
                />
              ))
            ))}
          {currentSection === 'logros' &&
            (hobbyData.logrosData.length === 0 ? (
              <p className="text-center text-gray-600">
                Aún no has creado un logro, presiona en el botón de abajo para agregar uno nuevo!
              </p>
            ) : (
              hobbyData.logrosData.map((card) => (
                <ObjetivosYLogrosCard
                  key={card.id}
                  onDelete={() => handleEliminarObjetiveOLogro(card.id)}
                  data={card}
                  onChange={handleCardChange}
                />
              ))
            ))}
        </div>
        <div className="my-6 border-t border-gray-300"></div>
        <AddButton onClick={handleAddObjetivoOLogro} />
      </main>
    </div>
  );
};

export default HobbyXPage;
