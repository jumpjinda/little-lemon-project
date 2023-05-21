import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import pages from '../../../utils/pages';
import { Link } from 'react-router-dom';
import './MealCard.css';

const MealCard = ({ meal }) => {
  return (
    <article className='meal-card'>
      <div className='meal-card-image'>
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className='meal-card-header'>
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className='meal-card-body-footer'>
        <p>{meal.description}</p>
        <Link to={pages.get('orderOnline').path}>
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    </article>
  );
};

export default MealCard;