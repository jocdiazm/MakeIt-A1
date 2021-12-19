import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProductProvider } from './components/ProductContext';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ProductProvider>
        <Outlet />
      </ProductProvider>
      <Footer />
    </div>
  );
};

export default App;
