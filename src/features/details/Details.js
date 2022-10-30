import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import styles from './Details.module.css';
import PieToBarChart from '../home/Pie2BarChart';

const Details = () => {
  const Id = localStorage.getItem('id');
  const arr = useSelector((state) => state.home);
  const details = arr.filter((item) => item.CoinInfo.Id === Id);

  return (
    <>
      <div className={styles.container}>
        {details.map((item) => (
          <div key={item.CoinInfo.Id}>
            <Card
              className={styles.card}
            >
              <Card.Body
                className={styles.cardBody}
                style={{ border: '2px solid #002147' }}
              >
                <div className={styles.img_container}>
                  <PieToBarChart />
                </div>
                <div
                  className={styles.cardDetails}
                >
                  <div>
                    <Card.Title className={styles.title}>{item.CoinInfo.Name}</Card.Title>
                  </div>
                  <div>
                    <div>
                      <Card.Text className={styles.text}>
                        {item.CoinInfo.Id}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.text}>
                        {item.CoinInfo.FullName}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.text}>
                        {item.CoinInfo.Price}
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
              </Card.Body>
            </Card>
            <Card
              key={item.CoinInfo.Id}
              id={item.CoinInfo.Id}
              className={styles.card2}
            >
              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Algorithm:</strong>
                        {item.CoinInfo.Algorithm}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>ProofType:</strong>
                        {item.CoinInfo.ProofType}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Rating:</strong>
                        {item.CoinInfo.Rating.Weiss.Rating}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>TAR:</strong>
                        {item.CoinInfo.Rating.Weiss.TechnologyAdoptionRating}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Block Time:</strong>
                        {item.CoinInfo.BlockTime}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Block Reward:</strong>
                        {item.CoinInfo.BlockReward}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Asset Launch Date:</strong>
                        {item.CoinInfo.AssetLaunchDate}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Max Supply:</strong>
                        {item.CoinInfo.MaxSupply}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>From Symbol:</strong>
                        {item.DISPLAY.USD.FROMSYMBOL}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>To Symbol:</strong>
                        {item.DISPLAY.USD.TOSYMBOL}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Market:</strong>
                        {item.DISPLAY.USD.MARKET}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Price:</strong>
                        {item.DISPLAY.USD.PRICE}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>LAST Volume:</strong>
                        {item.DISPLAY.USD.LASTVOLUME}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Volume 24 hour</strong>
                        {item.DISPLAY.USD.VOLUME24HOUR}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Volume 24 hour to:</strong>
                        {item.DISPLAY.USD.VOLUME24HOURTO}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Volume 24 hour from:</strong>
                        {item.DISPLAY.USD.OPEN24HOUR}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>High 24 hour:</strong>
                        {item.DISPLAY.USD.HIGH24HOUR}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Low 24 hour:</strong>
                        {item.DISPLAY.USD.LOW24HOUR}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Last Market:</strong>
                        {item.DISPLAY.USD.LASTMARKET}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Change 24 hour:</strong>
                        {item.DISPLAY.USD.CHANGE24HOUR}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Change Percent 24 hour:</strong>
                        {item.DISPLAY.USD.CHANGEPCT24HOUR}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Change 24 hour:</strong>
                        {item.DISPLAY.USD.CHANGE24HOUR}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Change hour %:</strong>
                        {item.DISPLAY.USD.CHANGEPCTHOUR}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Change hour:</strong>
                        {item.DISPLAY.USD.CHANGEHOUR}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>

              <Card.Body className={styles.cardLBody}>
                <div className={styles.cardLDetails}>
                  <div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Supply:</strong>
                        {item.DISPLAY.USD.SUPPLY}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Mkt Cap:</strong>
                        {item.DISPLAY.USD.MKTCAP}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Total Volume 24 hour:</strong>
                        {item.DISPLAY.USD.TOTALVOLUME24H}
                      </Card.Text>
                    </div>
                    <div>
                      <Card.Text className={styles.LText}>
                        <strong>Total Volume 24 hour to:</strong>
                        {item.DISPLAY.USD.TOTALVOLUME24HTO}
                      </Card.Text>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
