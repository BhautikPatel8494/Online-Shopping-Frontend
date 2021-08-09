import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Image, Button } from 'antd';
import '../style/AddToCart.css';
import { useDispatch } from 'react-redux';
import {
  plusQauntity,
  minesQauntity,
  removeItem,
  orderListAction,
  RemoveProductFromCart,
} from '../redux/action/action';
import swal from 'sweetalert';

function AddToCart() {
  const selectTheData = useSelector((state) => state.productCart.cartStorage);
  useSelector((state) => state.productCart.tempForChangeQuatity);

  const dispatch = useDispatch();

  function addQauntityHandler(id) {
    dispatch(plusQauntity(id));
  }
  function minesQauntityHandler(id) {
    dispatch(minesQauntity(id));
  }
  function removeItemHandler(id) {
    dispatch(removeItem(id));
  }
  function orderHandler() {
    if(selectTheData.length >= 1){
      swal('Good job!', 'Your Order Has Been Confirmed', 'success');
    }else{
      swal("No Any Selected Product", "please Go Home And PickUp Your Choice!");
    }
    dispatch(orderListAction(selectTheData));
    dispatch(RemoveProductFromCart())
  }

  let totalAmount = 0;
  for (let i = 0; i < selectTheData.length; i++) {
    const productDetails = selectTheData[i];
    const totalCurrentProductPrice = productDetails.price * productDetails.quatity
    totalAmount += totalCurrentProductPrice
  }
  
  return (
    <>
      {selectTheData.length ? (
        selectTheData.map((item, i) => (
          <React.Fragment key={i}>
            <Row>
              <Col xs={18} sm={18} md={18} lg={18} xl={18} offset={3}>
                <div className="AddToBox">
                  <div className="ImageCart">
                    <Image width={200} src={item.image} />
                  </div>
                  <div className="cartDetail">
                    <p className="cart_title">{item.title}</p>
                    <p className="cart_Price">${item.price * item.quatity}</p>
                    <div className="qauntity" style={{ display: 'flex' }}>
                      {item.quatity === 0 ? (
                        <Button type="disble">-</Button>
                      ) : (
                        <Button
                          type="primary"
                          onClick={() => minesQauntityHandler(item.id)}
                        >
                          -
                        </Button>
                      )}
                      <p className="cart_Price" style={{ margin: '0 10px' }}>
                        Quatity: {item.quatity}
                      </p>
                      <Button
                        onClick={() => addQauntityHandler(item.id)}
                        type="primary"
                      >
                        +
                      </Button>
                    </div>
                    <p className="Availabel">In stock</p>
                    <p className="descriptionCart">{item.description}</p>
                    <p className="categoryCart">{item.category}</p>
                    <div className="cartButton">
                      <div></div>
                      <div>
                        <Button
                          type="primary"
                          onClick={() => removeItemHandler(item.id)}
                          className="buttonInCart"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </React.Fragment>
        ))
      ) : (
        <div className="cartNotFound">
          <p className="firstPara"> Your Sell More Basket Is Empty</p>
          <p className="secondPara">Shop Today's Deal </p>
        </div>
      )}

      <nav className="totalNavValue">
        <div className="toFlexableDiv">
          <div className="subTotalDiv">
            <p>
              Subtotal : <span> {totalAmount.toFixed(2)} </span>
            </p>
          </div>
          <div className="buttonDivToBuy">
            <Button
              type="primary"
              style={{ backgroundColor: 'blue', padding: '0px 50px' }}
              className="btnOfBelow"
              onClick={orderHandler}
            >
              Buy
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default AddToCart;
