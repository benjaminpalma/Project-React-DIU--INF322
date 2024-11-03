import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Communities from './pages/communities/Communities';
import HobbiesPage from './pages/hobbies_page/HobbiesPage';
import HomePage from './pages/home_page';
import Navbar from './components/Navbar';
//import Login from './login_signup/login';
//import Signup from './login_signup/signup';
//import Profile from './pages/profile_page/profile_page';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
	  {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
