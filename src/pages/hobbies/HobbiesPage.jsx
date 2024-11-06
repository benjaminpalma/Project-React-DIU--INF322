import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import AddButton from '../../components/profile/AddButton';
import HobbyCard from '../../components/profile/HobbyCard';

const HobbiesPage = () => {
  const navigate = useNavigate();

  const hobbies = [
    { id: 1, title: "Hobby 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link:'/hobbie' },
    { id: 2, title: "Hobby 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", link:'/hobbie' },
  ];

  const handleAddHobby = () => {
    navigate('/nuevo-hobbie'); // Asegúrate de que esta ruta coincida con tu App.js
  };

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center px-6 py-12 lg:px-8 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Mis Hobbies</h2>
      
      <div className="w-full max-w-2xl space-y-6">
        {hobbies.map(hobby => (
          <HobbyCard key={hobby.id} title={hobby.title} description={hobby.description} link={hobby.link + '-' + hobby.id } />
        ))}
      </div>

      <AddButton onClick={handleAddHobby} />
    </div>
    </>
  );
};

export default HobbiesPage;
