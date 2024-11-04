import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('Correo.random@dominio.cl');
  const [phone, setPhone] = useState('+56 12345678');
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null); // Estado para la imagen de perfil

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMfaToggle = (e) => setMfaEnabled(e.target.checked);
  const handlePasswordChange = () => console.log('Nueva contraseña:', password);
  const handleDeleteAccount = () => navigate('/login');

  // Función para actualizar la imagen de perfil
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      // Aquí podrías agregar la lógica para cargar la imagen al servidor
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center mb-8">
        {/* Vista previa de la imagen de perfil */}
        <img
          src={profileImage || 'https://via.placeholder.com/100'}
          alt="Foto de perfil"
          className="w-24 h-24 rounded-full mb-4"
        />
        {/* Botón para cambiar la foto de perfil */}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="profileImageInput"
          onChange={handleProfileImageChange}
        />
        <label
          htmlFor="profileImageInput"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Cambiar Foto
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-400">Correo electrónico</label>
          <input
            type="email"
            className="border rounded-md p-2 w-full mt-2"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label className="text-gray-400">Teléfono</label>
          <input
            type="tel"
            className="border rounded-md p-2 w-full mt-2"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <label className="text-gray-400">MFA</label>
          <div className="mt-2">
            <input
              type="checkbox"
              checked={mfaEnabled}
              onChange={handleMfaToggle}
            />
            <label className="ml-2">Activado</label>
          </div>
        </div>
        <div>
          <label className="text-gray-400">Contraseña</label>
          <input
            type="password"
            className="border rounded-md p-2 w-full mt-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nueva contraseña"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handlePasswordChange}
          >
            Cambiar Contraseña
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteAccount}
        >
          Borrar Cuenta
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
