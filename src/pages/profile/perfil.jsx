import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('Correo.random@dominio.cl');
  const [phone, setPhone] = useState('+56 12345678');
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [password, setPassword] = useState(''); // Nuevo estado para la contraseña


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Aquí agregarías la lógica para guardar el nuevo email en el servidor
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    // Aquí agregarías la lógica para guardar el nuevo número de teléfono en el servidor
  };

  const handleMfaToggle = (e) => {
    setMfaEnabled(e.target.checked);
    // Aquí agregarías la lógica para actualizar el estado de MFA en el servidor
  };

  const handlePasswordChange = () => {
    // Aquí implementarías la lógica para cambiar la contraseña,
    // lo cual podría involucrar un modal de confirmación y validación
    console.log('Nueva contraseña:', password);
  };

  const handleDeleteAccount = () => {
    // Aquí agregarías la lógica para eliminar la cuenta en el servidor
    // ...

    // Después de eliminar la cuenta, redirige al usuario al login
    navigate('/communities');
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-400">Correo electrónico</label>
          <div className="mt-2">
            <input
              type="email"
              className="border rounded-md p-2 w-full"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div>
          <label className="text-gray-400">Teléfono</label>
          <div className="mt-2">
            <input
              type="tel"
              className="border rounded-md p-2 w-full"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div>
          <label className="text-gray-400">MFA</label>
          <div className="mt-2">
            <input
              type="checkbox"
              id="mfaEnabled"
              checked={mfaEnabled}
              onChange={handleMfaToggle}
            />
            <label htmlFor="mfaEnabled">Activado</label>
          </div>
        </div>
        <div>
          <label className="text-gray-400">Contraseña</label>
          <div className="mt-2">
            <input
              type="password"
              className="border rounded-md p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nueva contraseña"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handlePasswordChange}
          >
            Cambiar Contraseña
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeleteAccount}>
          Borrar Cuenta
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
