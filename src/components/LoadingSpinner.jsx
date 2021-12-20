import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import '../styles/components/LoadingSpinner.scss';

const LoadingSpinner = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div className='spinner__container'>
      {promiseInProgress ? (
        <div className='spinner__loading'>
          <h2>Cargando productos...</h2>
          <Loader type='ThreeDots' color='#00BFFF' height={100} width={100} />
        </div>
      ) : null}
    </div>
  );
};

export default LoadingSpinner;
