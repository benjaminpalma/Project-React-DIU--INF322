// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Hobbies from './components/Hobbies/Hobbies';
import CreateHobby from './components/Hobbies/CreateHobby';
import AddGoal from './components/Hobbies/AddGoal';
import Profile from './components/Profile/Settings';
import Communities from './components/Communities/Communities';
import CommunityDetails from './components/Communities/CommunityDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" exact component={Hobbies} />
          <Route path="/create-hobby" component={CreateHobby} />
          <Route path="/add-goal" component={AddGoal} />
          <Route path="/profile" component={Profile} />
          <Route path="/communities" component={Communities} />
          <Route path="/community/:id" component={CommunityDetails} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;