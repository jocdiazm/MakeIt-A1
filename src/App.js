import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
