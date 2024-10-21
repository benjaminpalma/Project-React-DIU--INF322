// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
};

export default App;