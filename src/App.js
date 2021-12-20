import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProductProvider } from './components/ProductContext';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <ProductProvider>
        <LoadingSpinner />
        <Outlet />
      </ProductProvider>
      <Footer />
    </div>
  );
};

export default App;
