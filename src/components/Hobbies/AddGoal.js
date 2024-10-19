// src/components/Hobbies/AddGoal.js
import React from 'react';

const AddGoal = () => {
  return (
    <div>
      <h2>Añadir Objetivo</h2>
      <form>
        <input type="text" placeholder="Objetivo" />
        <button type="submit">Añadir</button>
      </form>
    </div>
  );
};

export default AddGoal;