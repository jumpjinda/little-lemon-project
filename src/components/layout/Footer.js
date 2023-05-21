import { faInstagramSquare, faYoutubeSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import chef from './asset/restaurant chef B.jpg';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';
import pages from '../../utils/pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contacts = [
  { icon: faLocationDot, info: '101 E Lake St # C, Addison, IL 60101 USA' },
  { icon: faPhone, info: '(630) 782-6997' },
  { icon: faEnvelope, info: 'sales@littlelemon.com' }
];

const socials = [
  { icon: faFacebookSquare, name: 'facebook', },
  { icon: faTwitterSquare, name: 'twitter', },
  { icon: faInstagramSquare, name: 'instagram', },
  { icon: faYoutubeSquare, name: 'youtube', },
];

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

// navLinks.map((navLink) => console.log(navLink.path, navLink.name));

const Footer = () => {
  return (
    <footer>
      <container className="grid-container">
        <div className='footer-logo-container'>
          <img
            className='footer-logo'
            src={chef}
            alt="chef"
          />
        </div>
        <nav className='footer-nav'>
          <h3>Sitemap</h3>
          <ul className='footer-nav-link'>
            {navLinks.map((navLink, index) =>
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className='footer-contacts'>
          <h3>Contacts</h3>
          <address>
            {contacts.map((contact, index) =>
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            )}
          </address>
        </div>
        <div className='footer-social'>
          <h3>Contact with us</h3>
          <div className='footer-social-link'>
            {socials.map((social, index) =>
              <a
                key={index}
                href={`http://www.${social.name}.com`}
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={social.icon} size="2xl" style={{ color: "white" }} />
              </a>
            )}
          </div>
        </div>
      </container>
    </footer>
  );
};

export default Footer;