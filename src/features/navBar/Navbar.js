import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('');
    localStorage.removeItem('id');
  };

  return (
    <div className="navbar" style={{ backgroundColor: 'darkBlue' }}>
      <div>
        <button type="button" onClick={toHome} style={{ backgroundColor: 'darkblue', border: 'none', color: '#fff' }}>
          {'<'}
          {' '}
          2022
        </button>
      </div>
      <div>
        {localStorage.getItem('id') === null ? 'overall statistics' : 'coin stats'}
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-evenly', width: '20%',
      }}
      >
        <FontAwesomeIcon icon={faMicrophone} />
        {' '}
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
};

export default Navbar;
