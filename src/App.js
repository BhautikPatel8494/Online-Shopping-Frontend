import React from 'react';
import Home from './component/Home';
import Navbar from './component/Navbar';
import SingleProduct from './component/SingleProduct';
import AddToCart from './component/AddToCart'
import Order from './component/Order'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import './index.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Route exact component={Navbar} />
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={SingleProduct} />
        <Route path="/order/AddToCart" exact component={AddToCart} />
        <Route path="/order/OrderList" exact component={Order} />
      </Router>
    </Provider>
    </>
  );
}

export default App;
