import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { fetchAllAsync } from './homeSlice';
import styles from './Home.module.css';
import graphImg from '../assets/graphImg.jpg';

const Home = () => {
  const navigate = useNavigate();

  const toDetails = (e) => {
    navigate('details');
    localStorage.setItem('id', e.target.parentElement.id);
  };

  const dispatch = useDispatch();

  const arr = useSelector((state) => state.home);

  useEffect(() => {
    if (arr.length === 0) {
      dispatch(fetchAllAsync());
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Body className={styles.cardBody}>
            <div className={styles.img_container}>
              <Card.Img className={styles.image} src={graphImg} />
            </div>
            <div className={styles.cardDetails}>
              <div>
                <Card.Title className={styles.title}>Crypto Tracker</Card.Title>
              </div>
              <div>
                <div>
                  <Card.Text className={styles.text}>
                    <strong>Rank</strong>
                  </Card.Text>
                </div>
                <div>
                  <Card.Text className={styles.text}>
                    <strong>FullName</strong>
                  </Card.Text>
                </div>
                <div>
                  <Card.Text className={styles.text}>
                    <strong>Price</strong>
                  </Card.Text>
                </div>
                <div>
                  <Card.Text className={styles.text}>
                    <strong>Market Cap</strong>
                  </Card.Text>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className={styles.coinsContainer}>
        {arr.map((item) => (
          <Card
            className={styles.card}
            key={item.CoinInfo.Id}
          >
            <Card.Body
              className={styles.cardBody}
              id={item.CoinInfo.Id}
              onClick={toDetails}
            >
              <div>
                <div className={styles.img_container}>
                  <Card.Img className={styles.image} src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`} />
                </div>
              </div>
              <div>
                <div className={styles.cardDetails}>
                  <div>
                    <div>
                      <Card.Title className="text-muted"><h6>{item.CoinInfo.FullName}</h6></Card.Title>
                    </div>
                    <div className={styles.textContainerOutter}>
                      <div className={styles.textContainerInner}>
                        <div>
                          <Card.Text className={styles.text}>
                            <strong>{item.CoinInfo.Name}</strong>
                          </Card.Text>
                        </div>
                        <div>
                          <Card.Text className={styles.text}>
                            $
                            {' '}
                            {item.RAW.USD.PRICE.toFixed(2)}
                          </Card.Text>
                        </div>
                      </div>
                      <div className={styles.textContainerInner}>
                        <div>
                          <Card.Text className={styles.text}>
                            {item.CoinInfo.Id}
                          </Card.Text>
                        </div>
                        <div>
                          <Card.Text className={styles.text}>
                            $(B)
                            {' '}
                            {(item.RAW.USD.MKTCAP / 1000000000).toFixed(2)}
                          </Card.Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
