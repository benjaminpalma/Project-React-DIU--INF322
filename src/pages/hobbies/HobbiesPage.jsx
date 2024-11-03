import { useNavigate } from 'react-router-dom';

const HobbiesPage = () => {
  const navigate = useNavigate();

  const hobbies = [
    { id: 1, title: "Hobby 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, title: "Hobby 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  ];

  const handleAddHobby = () => {
    navigate('/nuevo-hobbie'); // Asegúrate de que esta ruta coincida con tu App.js
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 lg:px-8 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Mis Hobbies</h2>
      
      <div className="w-full max-w-2xl space-y-6">
        {hobbies.map(hobby => (
          <HobbyCard key={hobby.id} title={hobby.title} description={hobby.description} />
        ))}
      </div>

      <AddButton onClick={handleAddHobby} />
    </div>
  );
};

const HobbyCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-700">{description}</p>
  </div>
);

const AddButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-8 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
  >
    Agregar Nuevo Hobby
  </button>
);

export default HobbiesPage;
