import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter)

import Navbar from './components/Navbar';
import Communities from './pages/communities/Communities';
import ThreadPage from './pages/communities/Thread';
import CommunityPosts from './pages/communities/CommunityPosts';
import UserProfile from './pages/communities/UserProfile';

import NotificationsPage from './pages/alarma/NotificationsPage';

import HobbiesPage from './pages/hobbies/HobbiesPage';
import HobbyX from './pages/hobbies/HobbyX';
import NewHobby from './pages/hobbies/NewHobby';

//import HomePage from './pages/HomePage';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import PasswordRecovery from './pages/login/PasswordRecovery';
import Profile from './pages/profile/perfil'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
	      <header className="fixed inset-x-0 top-0 z-50 bg-white">
          <Navbar />
        </header>
        <main className="flex-1 p-6 mt-16 bg-gray-100">
          <Routes>
            <Route path="/" element={<Communities />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
            <Route path="/hobbies/:hobbyId" element={<HobbyX />}/>
            <Route path="/nuevo-hobbie" element={<NewHobby />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recover-password" element={<PasswordRecovery />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/communities/:category" element={<CommunityPosts/>} />
            <Route path="/communities/:category/:postId" element={<ThreadPage />} />
            <Route path="/profile/:username" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;