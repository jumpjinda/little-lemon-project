import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restauranfood.jpg';
import './Hero.css';
import pages from '../../../utils/pages';
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-information">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <Link to={pages.get('bookings').path}>
          <Button className='reserve-btn' variant="primary">
            Reserve a table
          </Button>
        </Link>
      </div>
      <img
        className="hero-image"
        src={restaurantFoodImage}
        alt="Restaurant food"
      />
    </section>
  );
};

export default Hero;