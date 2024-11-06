import React from 'react';

const AddButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-8 inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
  >
    Agregar Nuevo Hobby
  </button>
);


export default AddButton;