import propTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateOffer } from '../store/actions';

import '../styles/components/Countdown.scss';

// esto es feísimo y solo funciona para cuando timer<= 3600
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const formatedSeconds = `0${seconds > 60 ? seconds % 60 : seconds}`.slice(-2);
  return `${seconds < 3600 ? '0' : ''}${minutes}:${formatedSeconds}`;
};

const Countdown = ({ productId }) => {
  const offers = useSelector((state) => state.offers);
  const dispatch = useDispatch();

  const { seconds } = offers[productId];
  const [timeLeft, setTimeLeft] = useState(seconds);

  // Add a ref to store the interval id
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Add a listener to `timeLeft`
  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
      dispatch(
        updateOffer({ id: productId, offer: { isActive: false, seconds: 0 } }),
      );
    } else {
      dispatch(
        updateOffer({
          id: productId,
          offer: { isActive: true, seconds: timeLeft },
        }),
      );
    }
  }, [timeLeft]);
  return <span>{formatTime(timeLeft)}</span>;
};

Countdown.propTypes = {
  productId: propTypes.number.isRequired,
};

export default Countdown;
