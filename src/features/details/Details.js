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
