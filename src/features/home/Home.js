import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { fetchAllAsync } from './homeSlice';
import styles from './Home.module.css';
import graphImg from '../assets/graphImg.jpg';

const Home = () => {
  const navigate = useNavigate();

  const toDetails = () => {
    navigate('details');
  };

  const dispatch = useDispatch();

  const arr = useSelector((state) => state.home);

  useEffect(() => {
    if (arr.length === 0) {
      dispatch(fetchAllAsync());
    }
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Body className={styles.cardBody}>
            <div className={styles.img_container}>
              <Card.Img className={styles.Img} src={graphImg} />
            </div>
            <div>
              <Card.Title className={styles.title}>Crypto Tracker</Card.Title>
              <Card.Text className={styles.text}>
                <strong>Rank</strong>
                <strong>FullName</strong>
                <strong>Price</strong>
                <strong>Market Cap</strong>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card className={styles.card}>
          {arr.map((item) => (
            <Card.Body
              className={styles.cardBody}
              key={item.CoinInfo.Id}
              onClick={toDetails}
            >
              <div className={styles.img_container}>
                <Card.Img className={styles.Img} src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`} />
              </div>
              <div>
                <Card.Title className={styles.title}>{item.CoinInfo.FullName}</Card.Title>
                <Card.Text className={styles.text}>
                  <strong>{item.CoinInfo.Id}</strong>
                  <strong>{item.CoinInfo.Name}</strong>
                  <strong>{item.RAW.USD.PRICE.toFixed(2)}</strong>
                  <strong>{item.RAW.USD.MKTCAP}</strong>
                </Card.Text>
              </div>
            </Card.Body>
          ))}
        </Card>
      </div>
    </>
  );
};

export default Home;
