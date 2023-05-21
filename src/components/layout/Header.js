import { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from './asset/Logo.svg';
import pages from '../../utils/pages';
import './Header.css';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  // // Click outside navbar for hide //
  // const sideNavRef = useRef(null);
  // useEffect(() => {
  //   // Add event listener to the document object
  //   document.addEventListener('mousedown', handleClickOutside);

  //   // Remove event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // function handleClickOutside(event) {
  //   if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
  //     // Clicked outside the side navigation bar, close it
  //     // Implement your close side navigation bar logic here
  //     setIsNavExpanded(false);
  //   }
  // }

  return (
    <header>
      <nav className='navbar'>
        <Link className='navbar-logo' to={pages.get('home').path}>
          <img src={logoImg} />
        </Link>
        <button
          className='navbar-hamburger'
          type='button'
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faXmark} size='2x' /> :
            <FontAwesomeIcon icon={faBars} size='2x' />}
        </button>
        <ul
          className={isNavExpanded ? 'navbar-links expanded' : 'navbar-links'}
          // ref={sideNavRef}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink, index) =>
            <li key={index}>
              <Link
                className={pathname === navLink.path ? 'current-location' : ''}
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;