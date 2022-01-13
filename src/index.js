import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='product/:id' element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
