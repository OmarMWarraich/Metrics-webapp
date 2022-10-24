import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('');
  };

  return (
    <div className="navbar">
      <div>
        <button type="button" onClick={logout}>🔚</button>
      </div>
      <div>
        🔥
      </div>
    </div>
  );
};

export default Navbar;
