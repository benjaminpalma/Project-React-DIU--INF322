// src/components/Hobbies/CreateHobby.js
import React from 'react';

const CreateHobby = () => {
  return (
    <div>
      <h2>Crear Hobbie</h2>
      <form>
        <input type="text" placeholder="Nombre del hobbie" />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateHobby;