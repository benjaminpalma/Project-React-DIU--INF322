import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/nav_bar';
import HobbiesPage from '../pages/hobbies_page/hobbies_page';
import LightbulbPage from '../pages/lightbulb_page';
import NuevoHobbiePage from '../pages/nuevo_hobbie_page/NuevoHobbiePage';


const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HobbiesPage/>} />
            <Route path='/lightbulb' element={<LightbulbPage/>} />
            <Route path='/hobbies' element={<HobbiesPage/>} />
            <Route path='/nuevo-hobbie' element={<NuevoHobbiePage/>} />
	    {/* <Route path='/comunidades' element={<Communities/>} /> */}
            {/* <Route path='/buscador' element={</>}  /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
