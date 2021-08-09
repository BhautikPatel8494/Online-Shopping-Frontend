import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Rate, Alert } from 'antd';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../style/SingleProduct.css';
import { AddProduct } from '../redux/action/action';

function SingleProduct(props) {
  const [getMessage, setGetMessage] = useState(false);
  const location = useLocation();
  const path = location.pathname.substr(1);
  const [getSelected, setGetSelected] = useState([]);
  // const selectTheData = useSelector((state) => state.productCart.cartStorage);

  const dispatch = useDispatch();

  useEffect(() => {
    shoppingSelectedData();
  }, []);

  async function shoppingSelectedData() {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    setGetSelected(response.data);
  }
  const matchIdInApi = getSelected.find((obj) => obj.id === parseInt(path));

  const getRelatedItem = getSelected.filter(
    (obj) => obj.category === matchIdInApi.category
  );

  function addToCartHandler() {
    dispatch(AddProduct(matchIdInApi));
    setGetMessage(true);
  }
  return (
    <>
      {getMessage ?  <Alert
      message="Your Item has been added Into Cart"
      type="success"
      showIcon
      closable
    /> : null}
      {matchIdInApi ? (
        <>
          <Row>
            <Col xs={18} sm={18} md={18} lg={18} xl={18} offset={3}>
              {matchIdInApi && (
                <div className="SelectedBox">
                  <div className="ImageSelected">
                    <Image width={200} src={matchIdInApi.image} />
                  </div>
                  <div className="SelectedDetail">
                    <p className="Selected_title">{matchIdInApi.title}</p>
                    <p className="Selected_Price">${matchIdInApi.price}</p>
                    <p className="Selecteddescription">
                      {matchIdInApi.description}
                    </p>
                    <p className="Selectedcategory">{matchIdInApi.category}</p>
                    <div className="boxOfSelected">
                      <Rate allowHalf defaultValue={5} />
                      <button onClick={addToCartHandler}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
          <Row className="secondSelected">
            <Col xs={18} sm={18} md={18} lg={18} xl={18} offset={3}>
              <div>
                <h1 className="headingRelated"> Related Item : </h1>
              </div>
              <div className="mainflexBox">
                {getRelatedItem &&
                  getRelatedItem.map((item, i) => (
                    <div key={i} className="mainDetail">
                      <div className="imgOfTheRelated">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="titleOfRelated">
                        <Link
                          onClick={window.scrollTo(0, 0)}
                          className="detailView"
                          to={`/${item.id}`}
                        >
                          {' '}
                          View Details{' '}
                        </Link>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="mainDivLoader">
          <div className="loaderDiv"></div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
