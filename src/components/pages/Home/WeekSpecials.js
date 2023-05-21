import { Button } from 'react-bootstrap';
import greekSaladImage from './assets/greek salad.jpg';
import bruschettaImage from './assets/Italian-Bruschetta-Recipe.jpg';
import lemonDessertImage from './assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';
import pages from '../../../utils/pages';
import MealCard from './MealCard';
import './WeekSpecials.css';


const meals = [
  {
    id: 1,
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`,
  },
  {
    id: 2,
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$5.99',
    description: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$5.00',
    description: `This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className='week-specials'>
      <div className='week-speacials-header'>
        <h2>This week specials!</h2>
        <Button className='orderOnline-btn' variant='warning'>
          <Link to={pages.get('orderOnline').path}>
            Online Menu
          </Link>
        </Button>
      </div>
      <div className='meal-grid'>
        {meals.map((meal) =>
          <MealCard key={meal.id} meal={meal} />
        )}
      </div>
    </section>
  );
};

export default WeekSpecials;