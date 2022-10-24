import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAsync } from './homeSlice';

const Home = () => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate('details');
  };

  const dispatch = useDispatch();
  /* eslint-disable */
  
  useEffect(() => {
    if (arr.length === 0) {
    dispatch(fetchAllAsync());
    }
  }, [dispatch]);
  
  const arr = useSelector((state) => state.home); 

  return (
    <>
      <button type="button" onClick={toDetails}>Home</button>
      <div>
        <ul>
          {arr.map((item) => (
            <li key={item.CoinInfo.Id}>
              <button type="button" onClick={toDetails}>
                <img src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`} alt={item.CoinInfo.FullName} />
                <p>{item.CoinInfo.FullName}</p>
                <p>{item.CoinInfo.Name}</p>
                <p>{item.CoinInfo.Internal}</p>
              </button>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default Home;
