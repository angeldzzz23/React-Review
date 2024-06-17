import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import HomePage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import CityList from './components/CityList';


function App() {

  return (
  <BrowserRouter> 
    <Routes>
      <Route index element={<HomePage />} /> 
      <Route path='product' element={<Product />} /> 
      <Route path='pricing' element={<Pricing />} /> 
      <Route path='login' element={<Login />} /> 

      <Route path='app' element={<AppLayout />} >
          <Route index element={<CityList />} />
          <Route path='cities' element={<CityList />}/>
          <Route path='countries' element={<p>List of Countries</p>}/>
          <Route path='form' element={<p>form</p>}/>

      </Route>

      <Route path='*' element={<PageNotFound />}/>
    </Routes>

  </BrowserRouter>); 
     
}

export default App
