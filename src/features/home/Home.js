import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('details');
  };

  return (
    <div>
      <button type="button" onClick={login}>Home</button>
    </div>
  );
};

export default Home;
