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
              <Card.Img className={styles.image} src={graphImg} />
            </div>
            <div className={styles.cardDetails}>
              <Card.Title className={styles.title}>Crypto Tracker</Card.Title>
              <Card.Text className={styles.text}>
                <h6>Rank</h6>
                <h6>FullName</h6>
                <h6>Price</h6>
                <h6>Market Cap</h6>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className={styles.coinsContainer}>
        {arr.map((item) => (
          <Card
            className={styles.card}
            key={item.CoinInfo.Id}
            onClick={toDetails}
          >
            <Card.Body className={styles.cardBody}>
              <div className={styles.img_container}>
                <Card.Img className={styles.image} src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`} />
              </div>
              <div className={styles.cardDetails}>
                <Card.Title className="text-muted"><h6>{item.CoinInfo.FullName}</h6></Card.Title>
                <Card.Text className={styles.text}>
                  <h6>{item.CoinInfo.Id}</h6>
                  <h6>{item.CoinInfo.Name}</h6>
                  <h6>{item.RAW.USD.PRICE.toFixed(2)}</h6>
                  <h6>
                    {(item.RAW.USD.MKTCAP / 1000000000).toFixed(2)}
                    {' '}
                    $(B)
                  </h6>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
