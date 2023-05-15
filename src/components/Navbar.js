import React from 'react';
import burgerImg from '../images/hamburger_menu.svg';
import basket from '../images/Basket.svg';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  const [navMenu, setNavMenu] = React.useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);

  const updateNavMenu = () => {
    if (!isMenuClicked) {
      setNavMenu("menu visible");
    }
    else {
      setNavMenu("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };


  return (
    <>
      <div
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
        <div className='burger-menu'>
          <img src={burgerImg} onClick={updateNavMenu} />
        </div>
        <div className={navMenu}>
          <ul className='navUl'>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/reservation">RESERVATION</Link></li>
            <li><Link to="/order-page">ORDER ONLINE</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
          </ul>
        </div>
        <img
          style={{
            height: "40px"
          }}
          src={logo} />
        <img
          style={{
            position: "relative",
            height: "40px",
            right: "10px"
          }}
          src={basket} />
      </div>
    </>
  );
};
export default Navbar;