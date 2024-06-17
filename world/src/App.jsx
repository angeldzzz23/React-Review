import { useEffect, useState } from 'react';
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
import CountriesList from './components/CountriesList';
import City from './components/City';



function App() {
  
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = 'http://localhost:9000';

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);  // Correct string interpolation
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there was an error loadcing data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
  <BrowserRouter> 
    <Routes>
      <Route index element={<HomePage />} /> 
      <Route path='product' element={<Product />} /> 
      <Route path='pricing' element={<Pricing />} /> 
      <Route path='login' element={<Login />} /> 

      <Route path='app' element={<AppLayout />} >
          <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path='cities'
           element={<CityList 
           cities={cities} 
           isLoading={isLoading} />}/>
          <Route path='cities/:id'
          element={<City />}
          
          />
          <Route 
            path='countries' 
            element={<CountriesList 
            cities={cities} 
            isLoading={isLoading}/>}/>
          <Route path='form' element={<p>form</p>}/>

      </Route>

      <Route path='*' element={<PageNotFound />}/>
    </Routes>

  </BrowserRouter>); 
     
}

export default App
