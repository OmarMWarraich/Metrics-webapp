import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('');
    localStorage.removeItem('id');
  };

  return (
    <div className="navbar">
      <div>
        <button type="button" onClick={toHome}>🔚</button>
      </div>
      <div>
        {localStorage.getItem('id') === null ? 'overall statistics' : 'coin stats'}
      </div>
      <div>
        🔥
      </div>
    </div>
  );
};

export default Navbar;
