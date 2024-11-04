import { useState, useEffect } from 'react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Carga de notificaciones (aquí podrías agregar la lógica para obtener datos de un backend en el futuro)
    setNotifications([]); // Simulamos que no hay notificaciones.
  }, []);

  return (
    <div className="max-w-md mx-auto my-4 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Notificaciones</h2>
      <div className="mt-4">
        {notifications.length > 0 ? (
          <ul className="space-y-2">
            {notifications.map((notification, index) => (
              <li key={index} className="p-2 border-b border-gray-200">
                {notification.message}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No hay notificaciones.</p>
        )}
      </div>
    </div>
  );
}
