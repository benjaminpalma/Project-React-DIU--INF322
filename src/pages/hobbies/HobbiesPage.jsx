import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AddButton from '../../components/profile/AddButton';
import HobbyCard from '../../components/profile/HobbyCard';
import { v4 as uuidv4 } from 'uuid';
import Imagen from '../../assets/imagen.png';

const HobbiesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('Location state on HobbiesPage:', location.state);

  const [hobbies, setHobbies] = useState([
    { 
      id: uuidv4(), 
      key: 'Ejemplo-1', 
      hobbyName: "Hobby Ejemplo 1", 
      hobbyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      objetivosData: [
        {
          id: uuidv4(),
          title: "Mejorar habilidades",
          description: "Mejorar mis habilidades cada semana",
          tasks: ["Practicar todos los días", "Realizar una autoevaluación cada semana"],
          image: Imagen
        },
        {
          id: uuidv4(),
          title: "Participar en taller",
          description: "Participar en un taller mensual relacionado con el hobby",
          tasks: ["Buscar talleres disponibles", "Inscribirse y participar"],
          image: Imagen
        }
      ],
      logrosData: [
        {
          id: uuidv4(),
          title: "Asistencia a talleres",
          description: "Asistí a 3 talleres el mes pasado",
          tasks: ["Registro de asistencia", "Participación activa"],
          image: Imagen
        },
        {
          id: uuidv4(),
          title: "Proyecto completado",
          description: "Completar un proyecto relacionado al hobby",
          tasks: ["Planificar proyecto", "Ejecutar y completar"],
          image: Imagen
        }
      ],
      hobbyImage: Imagen
    },
    { 
      id: uuidv4(), 
      key: 'Ejemplo-2', 
      hobbyName: "Hobby Ejemplo 2", 
      hobbyDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      objetivosData: [
        "Leer un libro relacionado con el hobby cada mes",
        "Realizar una actividad práctica cada semana"
      ],
      logrosData: [
        "Leí dos libros este mes",
        "Completé todas las actividades prácticas durante el mes pasado"
      ],
      hobbyImage: Imagen
    },
  ]);

  useEffect(() => {
    console.log('Checking if new hobby data is available in location.state');
    if (location.state?.newHobby) {
      const newHobby = location.state.newHobby;
      console.log('New Hobby Data:', newHobby);

      setHobbies(prevHobbies => {
        // Verificar si el hobby ya existe para evitar duplicados
        const exists = prevHobbies.some(hobby => hobby.hobbyName === newHobby.hobbyName);
        if (exists) {
          return prevHobbies;
        }
        return [
          ...prevHobbies,
          {
            id: uuidv4(),
            key: newHobby.key || uuidv4(),
            hobbyName: newHobby.hobbyName,
            hobbyDescription: newHobby.hobbyDescription,
            objetivosData: newHobby.objetivosData.map(objetivo => ({
              id: uuidv4(),
              title: objetivo.title || "Título de Objetivo",
              description: objetivo.description || "Descripción del objetivo",
              tasks: objetivo.tasks || ["Tarea 1", "Tarea 2"],
              image: objetivo.image || Imagen
            })),
            logrosData: newHobby.logrosData.map(logro => ({
              id: uuidv4(),
              title: logro.title || "Título de Logro",
              description: logro.description || "Descripción del logro",
              tasks: logro.tasks || ["Tarea 1", "Tarea 2"],
              image: logro.image || Imagen
            })),
            hobbyImage: newHobby.hobbyImage || Imagen
          },
        ];
      });
    }
  }, [location.state]);

  const handleDeleteHobby = (id) => {
    setHobbies(hobbies.filter(hobby => hobby.id !== id));
  };

  const handleAddHobby = () => {
    navigate('/nuevo-hobbie');
  };

  const handleCardClick = (hobby) => {
    console.log('Card clicked. Navigating to hobby details with hobby data:', hobby);
    // Navegar a la página del hobby pasando los datos como state
    navigate(`/hobbies/${hobby.hobbyName}`, { state: { hobbyData: hobby } });
  };

  return (
    <div className="flex flex-col items-center px-6 py-12 lg:px-8 min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Mis Hobbies</h2>
      
      <div className="w-full max-w-2xl space-y-6">
        {hobbies.map(hobby => (
          <HobbyCard 
            key={hobby.key}
            title={hobby.hobbyName} 
            description={hobby.hobbyDescription} 
            image={hobby.hobbyImage}
            onDelete={() => handleDeleteHobby(hobby.id) }
            onClick={() => handleCardClick(hobby)}
          />
        ))}
      </div>

      <AddButton onClick={handleAddHobby} />
    </div>
  );
};

export default HobbiesPage;
