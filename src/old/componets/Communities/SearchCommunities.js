// src/components/Communities/SearchCommunities.js
import React, { useState } from 'react';

const SearchCommunities = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda
    console.log("Buscando comunidades:", searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar comunidades"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchCommunities;