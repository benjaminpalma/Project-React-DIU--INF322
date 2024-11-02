import React from 'react';
import { useNavigate } from 'react-router-dom';
import HobbyCard from '../../components/profile/HobbyCard';
import AddButton from '../../components/profile/AddButton';

const HobbiesPage = () => {
  const navigate = useNavigate();

  const hobbies = [
    { id: 1, title: "Heading", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Heading", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const handleAddHobby = () => {
    navigate('/nuevo-hobbie');
  };

  return (
    <div className="hobbies-page">
      {hobbies.map(hobby => (
        <HobbyCard key={hobby.id} title={hobby.title} description={hobby.description} />
      ))}
      <AddButton onClick={handleAddHobby} />
    </div>
  );
};

export default HobbiesPage;