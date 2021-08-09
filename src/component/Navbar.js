import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

function Navbar() {

  // const [dataUpdata,setDataUpdates] = useState('')
  const dataForNav = useSelector((state) => state.productCart.cartStorage);
  useSelector((state) => state.productCart.tempForChangeQuatity);

  // useEffect(() => {
  //   setDataUpdates(dataForNav.length)
  // },[])

  return (
    <>
      <nav className="navBarMain">
        <div className="LogoMain">
          <Link to="/">
            <h2>Sell More</h2>
          </Link>
        </div>
        <div className="buttonMain">
          <ul className="navUl">
            <li className="navLi">
              <Link to="/order/AddToCart">
                <Button type="primary">Add To Cart ({dataForNav.length}) </Button>
              </Link>
            </li>
            <li className="navLi">
              <Link to="/order/OrderList">
                <Button type="primary">Order</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
