import React, { useEffect, useRef, useState } from 'react';
import burgerImg from '../images/hamburger_menu.svg';
import basket from '../images/Basket.svg';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  const [navMenu, setNavMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateNavMenu = () => {
    if (!isMenuClicked) {
      setNavMenu("menu visible");
    }
    else {
      setNavMenu("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const sideNavRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      // Clicked outside the side navigation bar, close it
      // Implement your close side navigation bar logic here
      setNavMenu("menu hidden");
      setIsMenuClicked(false);
    }
  }

  console.log(isMenuClicked);

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
          <div ref={sideNavRef}>
            <ul className={'navUl'}>
              <li><Link to="/">Homepage</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/menu">MENU</Link></li>
              <li><Link to="/reservation">RESERVATION</Link></li>
              <li><Link to="/order-page">ORDER ONLINE</Link></li>
              <li><Link to="/login">LOGIN</Link></li>
            </ul>
          </div>
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