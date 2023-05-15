import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import food from '../images/restauranfood.jpg';
import salad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import dessert from '../images/lemon dessert.jpg';
import './homepage.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons';




function Homepage() {
  return (
    <div>
      <Header />

      <main className='main'>
        <section className='hero'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <div className='middle-hero'>
            <div className='middle-hero-text'>Little Lemon restaurant, focused on traditional recipes served with a modern twist.
              <div className='middle-hero-button'>
                <Link to="/reservation">Reserve a table</Link>
              </div>
            </div>
            <img className='middle-hero-img' src={food} />
          </div>
        </section>


        <section className='specials'>
          <h1>Specials</h1>
          <div className='menu-button'>
            <Link to="/menu">All menu</Link>
          </div>
        </section>

        <section className='specials-grid'>
          <div className='specials-card'>
            <img className='card-img' src={salad} />
            <div className='card-header'>
              <div className='card-header-text'>Greek salad</div>
              <div className='card-header-price'>$12.99</div>
            </div>
            <div className='card-detail'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta chesse, garnished with crunchy garlic and rosemary croutons.</div>
            <div className='card-footer'>Order a delivery <span><FontAwesomeIcon icon={faTruckRampBox} /></span></div>
          </div>
          <div className='specials-card'>
            <img className='card-img' src={bruchetta} />
            <div className='card-header'>
              <div className='card-header-text'>Bruchetta</div>
              <div className='card-header-price'>$5.99</div>
            </div>
            <div className='card-detail'>OUr Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</div>
            <div className='card-footer'>Order a delivery <span><FontAwesomeIcon icon={faTruckRampBox} /></span></div>
          </div>
          <div className='specials-card'>
            <img className='card-img' src={dessert} />
            <div className='card-header'>
              <div className='card-header-text'>Lemon Dessert</div>
              <div className='card-header-price'>$5.00</div>
            </div>
            <div className='card-detail'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authntic as can be imagined</div>
            <div className='card-footer'><p>Order a delivery</p><span><FontAwesomeIcon icon={faTruckRampBox} /></span></div>
          </div>
        </section>
      </main>

      <Footer />
    </div >
  );
}

export default Homepage;