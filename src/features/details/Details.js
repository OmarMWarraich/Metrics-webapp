import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

const Details = () => {
  const Id = localStorage.getItem('id');
  const arr = useSelector((state) => state.home);
  const details = arr.filter((item) => item.CoinInfo.Id === Id);

  return (
    <>
      <div className="container">
        {details.map((item) => (
          <Card key={item.CoinInfo.Id} id={item.CoinInfo.Id} className="card">
            <Card.Body className="cardBody">
              <div className="img_container">
                <Card.Img className="image" src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`} />
              </div>
              <div className="cardDetails">
                <div>
                  <Card.Title className="title">{item.CoinInfo.FullName}</Card.Title>
                </div>
                <div>
                  <div>
                    <Card.Text className="text">
                      <strong>Rank</strong>
                      {item.CoinInfo.FullName}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>FullName</strong>
                      {item.CoinInfo.FullName}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Price</strong>
                      {item.RAW.USD.PRICE}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Market Cap</strong>
                      {item.RAW.USD.MKTCAP}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>Algorithm:</strong>
                      {item.CoinInfo.Algorithm}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>ProofType:</strong>
                      {item.CoinInfo.ProofType}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Rating:</strong>
                      {item.CoinInfo.Rating.Weiss.Rating}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>TAR:</strong>
                      {item.CoinInfo.Rating.Weiss.TechnologyAdoptionRating}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>Block Time:</strong>
                      {item.CoinInfo.BlockTime}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Block Reward:</strong>
                      {item.CoinInfo.BlockReward}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Asset Launch Date:</strong>
                      {item.CoinInfo.AssetLaunchDate}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Max Supply:</strong>
                      {item.CoinInfo.MaxSupply}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>From Symbol:</strong>
                      {item.DISPLAY.USD.FROMSYMBOL}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>To Symbol:</strong>
                      {item.DISPLAY.USD.TOSYMBOL}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Market:</strong>
                      {item.DISPLAY.USD.MARKET}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Price:</strong>
                      {item.DISPLAY.USD.PRICE}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>LAST Volume:</strong>
                      {item.DISPLAY.USD.LASTVOLUME}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Volume 24 hour</strong>
                      {item.DISPLAY.USD.VOLUME24HOUR}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Volume 24 hour to:</strong>
                      {item.DISPLAY.USD.VOLUME24HOURTO}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Volume 24 hour from:</strong>
                      {item.DISPLAY.USD.OPEN24HOUR}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>High 24 hour:</strong>
                      {item.DISPLAY.USD.HIGH24HOUR}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Low 24 hour:</strong>
                      {item.DISPLAY.USD.LOW24HOUR}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Last Market:</strong>
                      {item.DISPLAY.USD.LASTMARKET}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Change 24 hour:</strong>
                      {item.DISPLAY.USD.CHANGE24HOUR}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>Change Percent 24 hour:</strong>
                      {item.DISPLAY.USD.CHANGEPCT24HOUR}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Change 24 hour:</strong>
                      {item.DISPLAY.USD.CHANGE24HOUR}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Change hour %:</strong>
                      {item.DISPLAY.USD.CHANGEPCTHOUR}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Change hour:</strong>
                      {item.DISPLAY.USD.CHANGEHOUR}
                    </Card.Text>
                  </div>

                  <div>
                    <Card.Text className="text">
                      <strong>Supply:</strong>
                      {item.DISPLAY.USD.SUPPLY}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Mkt Cap:</strong>
                      {item.DISPLAY.USD.MKTCAP}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Total Volume 24 hour:</strong>
                      {item.DISPLAY.USD.TOTALVOLUME24H}
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Text className="text">
                      <strong>Total Volume 24 hour to:</strong>
                      {item.DISPLAY.USD.TOTALVOLUME24HTO}
                    </Card.Text>
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

export default Details;
