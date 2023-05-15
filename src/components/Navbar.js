import React from 'react';
import burgerImg from '../images/hamburger_menu.svg';
import basket from '../images/Basket.svg';
import logo from '../images/Logo.svg';
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
          justifyContent: "space-around",
          position: "static"
        }}>
        <div
          className='burger-menu'>
          <img src={burgerImg} onClick={updateNavMenu} />
        </div>
        <div className={navMenu}>
          <ul className='navUl'>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">MENU</a></li>
            <li><a href="">RESERVATION</a></li>
            <li><a href="">ORDER ONLINE</a></li>
            <li><a href="">LOGIN</a></li>
          </ul>
        </div>
        <img
          style={{
            height: "40px"
          }}
          src={logo} />
        <img
          style={{
            height: "30px"
          }}
          src={basket} />
      </div>
    </>
  );
};
export default Navbar;