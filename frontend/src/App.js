import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './pages';
import LoginPage from './pages/login';
import ProductsPage from './pages/products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/login' element={<LoginPage />} exact />
        <Route path='/products' element={<ProductsPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
