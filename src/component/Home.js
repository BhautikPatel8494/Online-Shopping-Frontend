import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Rate } from 'antd';
import axios from 'axios';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [getData, setGetData] = useState([]);

  async function shoppingData() {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    setGetData(response.data);
  }

  useEffect(() => {
    shoppingData();
  }, []);

  return (
    <>
      {getData.length ? (
        getData.map((item, i) => (
          <React.Fragment key={i}>
            <Row>
              <Col xs={18} sm={18} md={18} lg={18} xl={18} offset={3}>
                <div className="productBox">
                  <div className="ImageProduct">
                    <Image width={200} src={item.image} />
                  </div>
                  <div className="productDetail">
                    <p className="product_title">{item.title}</p>
                    <p className="product_Price">${item.price}</p>
                    <p className="description">{item.description}</p>
                    <p className="category">{item.category}</p>
                    <div className="boxOfButtonRate">
                      <Rate allowHalf defaultValue={5} />
                      <Link to={`/${item.id}`}>
                        {' '}
                        <button> View Product here </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        ))
      ) : (
        <div className="mainDivLoader">
          <div className="loaderDiv"></div>
        </div>
      )}
    </>
  );
}

export default Home;
