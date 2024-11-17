import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import Navbar from '../../components/Navbar'

const HobbyX = () => {
    const { hobbyKey } = useParams();
  
    return (
    <>
      {/* <Navbar/> */}
      <div>
      <h1>Detalles del Hobby: {hobbyKey}</h1>
      </div>
    </>
    );
};

export default HobbyX