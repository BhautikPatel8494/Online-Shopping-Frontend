import React from 'react';
// import { orderListAction } from '../redux/action/action';
import { useSelector } from 'react-redux';
import { Row, Col, Image } from 'antd';

import '../style/Order.css';

function Order() {
  const getOrderData = useSelector((state) => state.orderList.orderList);

  return (
    <>
      {getOrderData.map((item, i) => (
        <React.Fragment key={i}>
          <Row>
            <Col xs={18} sm={18} md={18} lg={18} xl={18} offset={3}>
              <div className="mainOrderBox">
                <div className="orderImageMain">
                  <Image width={200} src={item.image} />
                </div>
                <div className="descPartOrder">
                  <p className="orderTitle">{item.title}</p>
                  <p className="orderQauntity"> Qauntity: {item.quatity}</p>
                  <p className="orderTotalPrice">
                    ${item.price * item.quatity}
                  </p>
                  <p className="orderDesc">{item.description}</p>
                  <p className="orderCategory">{item.category}</p>
                </div>
                <div className="orderDetail">
                  <div className="orderDescBox">
                    <p className="orderFirstKey">
                      Order Place : <span className="orderPlace"> 24, Jun </span>
                    </p>
                    <p className="orderFirstKey">
                      Ship To : <span className="orderPlace"> Epic Corrier </span>
                    </p>
                    <p className="orderFirstKey">
                      Total Amount : <span className="orderPlace"> ${item.price * item.quatity}</span>
                    </p>
                    <p className="orderFirstKey">
                      Order Number : <span className="orderPlace"> 11162846541 </span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </React.Fragment>
      ))}
    </>
  );
}

export default Order;
