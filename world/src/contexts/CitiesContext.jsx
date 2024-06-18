import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();


function CitiesProvider({children}) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

  
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

// getting the city 
async function getCity(id) {
        try {
          setIsLoading(true);
          const res = await fetch(`${BASE_URL}/cities/${id}`);  // Correct string interpolation
          const data = await res.json();
          setCurrentCity(data);
        } catch {
          alert("there was an error loadcing data");
        } finally {
          setIsLoading(false);
        }
}

return (
<CitiesContext.Provider 
value={{
    cities, 
    isLoading,
    currentCity,
    getCity,
}}>
    {children}
</CitiesContext.Provider>);
}


// 
function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) {
        throw new Error("citiesContext was used outside the cities provider");
    }
    return context;
}

export {CitiesProvider, useCities};
