import { useState } from 'react';

const NewHobby = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [achievements, setAchievements] = useState([]);

  const handleAddAchievement = () => {
    const newAchievement = prompt("Describe el logro:");
    if (newAchievement) {
      setAchievements([...achievements, newAchievement]);
    }
  };

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    // Aquí se manejaría el envío o almacenamiento del nuevo hobbie
    console.log({ title, description, image, achievements });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Crear un nuevo hobbie
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Nombre del Hobbie
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Descripción
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Imagen del Hobbie
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
            {image && <img src={image} alt="Hobbie" className="mt-4 w-full rounded-md" />}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Logros
            </label>
            <button
              type="button"
              onClick={handleAddAchievement}
              className="mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Agregar logro
            </button>
            <ul className="mt-4 list-disc pl-5">
              {achievements.map((ach, index) => (
                <li key={index} className="text-sm text-gray-700">{ach}</li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Crear Hobbie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewHobby;
