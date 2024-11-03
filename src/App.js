import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Communities from './pages/communities/Communities';
import HobbiesPage from './pages/hobbies/HobbiesPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
//import Signup from './pages/login/Signup';
//import Profile from './pages/profile/Profile';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
	<header className="fixed inset-x-0 top-0 z-50 bg-white">
          <Navbar />
        </header>
        <main className="flex-1 p-6 mt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
	    <Route path="/login" element={<Login />} />
	  {/*<Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
