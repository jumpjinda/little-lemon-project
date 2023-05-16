import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import restaurantImg from '../images/restaurant.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBiking, faChair, faCalendarDay, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Reservation() {

  const [peopleNum, setPeopleNum] = useState(0);

  const incrementPeople = () => {
    if (peopleNum === 10) {
      setPeopleNum(peopleNum);
    }
    else {
      setPeopleNum(peopleNum + 1);
    }
  };

  const decrementPeople = () => {
    if (peopleNum === 0) {
      setPeopleNum(peopleNum);
    }
    else {
      setPeopleNum(peopleNum - 1);
    }
  };

  return (
    <div>
      <Header />

      <main>
        <section className='hero-reservation'>
          <img src={restaurantImg} />
        </section>
        <section className='booking'>
          <div className='booking-header'>
            <div className='booking-header-text'>
              <h1>First class table</h1>
            </div>
            <div className='booking-header-price'>
              <h1>$49.99</h1>
            </div>
          </div>
          <div className='booking-description'>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          </div>
          <form className='booking-form'>

            <div className='date-from'>
              <FontAwesomeIcon id="date-icon" icon={faCalendarDay} size="xl" style={{ color: "#495e57", }} />
              <label className='date-text'>date:
              </label>
              <input
                className='date-input'
                type='date'
                required>
              </input>
            </div>

            <div className='arrival-time-from'>
              <FontAwesomeIcon icon={faPersonBiking} size="xl" style={{ color: "#495e57", }} />
              <label className='arrival-text'>Arrival Time:
              </label>
              <input
                className='arrival-time'
                type='time'
                min='0900'
                max='2100'
                required>
              </input>
            </div>

            <div className='seat-form'>
              <div className='seat-form-header'>
                <FontAwesomeIcon id='faChair' icon={faChair} size="xl" style={{ color: "#495e57", }} />
                <p className='seat-area-header-text'>
                  Seat preferance area:
                </p>
              </div>
              <div className='seat-input-form'>
                <div className='window-seat-from'>
                  <label for="window">Window-seat:</label>
                  <input
                    type="radio"
                    id="window"
                    name="seat"
                    value="window" />
                </div>
                <div className='Sofas-seat-from'>
                  <label for="sofas">Sofas:</label>
                  <input
                    type="radio"
                    id="sofas"
                    name="seat"
                    value="sofas" />
                </div>
              </div>

              <div className='people-form'>
                <div className='people-form-header'>
                  <h1>Number of people</h1>
                </div>
                <div className='people-form-input'>
                  <FontAwesomeIcon icon={faMinus} onClick={decrementPeople} />
                  <div><h1>{peopleNum}</h1></div>
                  <FontAwesomeIcon icon={faPlus} onClick={incrementPeople} />
                </div>
              </div>
            </div>

            <div className='form-submit'>
              <input type="submit" value="Reserve" />
            </div>

          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Reservation;