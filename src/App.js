import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

import store from './store';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Provider store={store}>
        <LoadingSpinner />
        <Outlet />
      </Provider>
      <Footer />
    </div>
  );
};

export default App;
