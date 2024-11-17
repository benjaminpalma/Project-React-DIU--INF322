import React, { useState, useEffect } from 'react';

const ObjetivosYLogrosCard = ({ onDelete, data, onChange }) => {
  const [id, setId] = useState(data?.id || '');
  const [title, setTitle] = useState(data?.title || '');
  const [description, setDescription] = useState(data?.description || '');
  const [tasks, setTasks] = useState(data?.tasks || ['']);
  const [image, setImage] = useState(data?.image || null);
  const [cardImageUrl, setCardImageUrl] = useState(null);

  useEffect(() => {
    if (data) {
      setId(data.id || '');
      setTitle(data.title || '');
      setDescription(data.description || '');
      setTasks(data.tasks || ['']);
      setImage(data.image || null);
    }
  }, [data]);

  // Efecto para crear el ObjectURL para la imagen cuando esta cambia
  useEffect(() => {
    if (image && image instanceof File) {
      const newCardImageUrl = URL.createObjectURL(image);
      setCardImageUrl(newCardImageUrl);

      // Liberar el ObjectURL cuando la imagen cambie o el componente se desmonte
      return () => {
        URL.revokeObjectURL(newCardImageUrl);
      };
    } else if (typeof image === 'string') {
      setCardImageUrl(image);
    } else {
      setCardImageUrl(null);
    }
  }, [image]);

  // Notificar al componente padre cuando haya un cambio en los datos
  useEffect(() => {
    onChange({ id, title, description, tasks, image });
  }, [id, title, description, tasks, image]);

  const handleAddTask = () => {
    const updatedTasks = [...tasks, ''];
    setTasks(updatedTasks);
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  const handleImageChange = (file) => {
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex gap-6">
        <div className="flex-shrink-0">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e.target.files[0])}
              className="hidden"
            />
            {cardImageUrl ? (
              <img
                src={cardImageUrl}
                alt="Objetivo icon"
                className="w-32 h-32 object-cover rounded-md"
              />
            ) : (
              <img
                src={require('../../assets/imagen.png')}
                alt="Objetivo icon"
                className="w-32 h-32 object-cover rounded-md"
              />
            )}
            <span className="block mt-2 text-sm text-gray-500">Cargar Imagen</span>
          </label>
        </div>
        <div className="flex-grow">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="text-sm text-gray-700">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <input
                  type="text"
                  value={task}
                  onChange={(e) => handleTaskChange(index, e.target.value)}
                  placeholder="Tarea"
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteTask(index);
                  }}
                >
                  🗑️
                </button>
              </div>
            ))}
            <button
              className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                handleAddTask();
              }}
            >
              + Añadir tarea
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          className="text-gray-500 hover:text-red-500 focus:outline-none text-2xl"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ObjetivosYLogrosCard;
