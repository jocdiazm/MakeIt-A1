import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { fetchProducts } from './store/actions';

import './App.css';

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  useEffect(async () => {
    dispatch(fetchProducts(isLoading));
  }, []);

  return (
    <div className='App'>
      <Navbar />

      <LoadingSpinner />
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
