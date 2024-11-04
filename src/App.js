import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter)

import Communities from './pages/communities/Communities';
import HobbiesPage from './pages/hobbies/HobbiesPage';
import NotificationsPage from './pages/alarma/NotificationsPage';
import NewHobby from './pages/nuevohobbie/NewHobby';

//import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import PasswordRecovery from './pages/login/PasswordRecovery';
import UserProfile from './pages/profile/perfil';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
	      <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <Navbar />
        </header>
        <main className="flex-1 p-6 mt-16">
          <Routes>
            <Route path="/" element={<Communities />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/nuevo-hobbie" element={<NewHobby />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recover-password" element={<PasswordRecovery />} />
            <Route path="/perfil" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;