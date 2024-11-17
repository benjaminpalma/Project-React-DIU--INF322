import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddButton from '../../components/profile/AddButton';
import HobbyCard from '../../components/profile/HobbyCard';

const HobbiesPage = () => {
  const navigate = useNavigate();

  const [hobbies, setHobbies] = useState([
    { id: 1, key: 'Ejemplo-1', title: "Hobby Ejemplo 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, key: 'Ejemplo-2' , title: "Hobby Ejemplo 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ]);

  const handleDeleteHobby = (id) => {
    setHobbies(hobbies.filter(hobby => hobby.id !== id));
  };

  const handleAddHobby = () => {
    navigate('/nuevo-hobbie');
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 lg:px-8 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Mis Hobbies</h2>
      
      <div className="w-full max-w-2xl space-y-6">
        {hobbies.map(hobby => (
          <HobbyCard 
            title={hobby.title} 
            description={hobby.description} 
            link={'/hobbies/' + hobby.key }
            onDelete={() => handleDeleteHobby(hobby.id) }
          />
        ))}
      </div>

      <AddButton onClick={handleAddHobby} />
    </div>
  );
};

export default HobbiesPage;
