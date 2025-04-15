import React, { useState } from 'react';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <UserList searchTerm={searchTerm} />
    </div>
  );
};

export default App;
