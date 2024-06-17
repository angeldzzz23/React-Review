import styles from './countryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

function CountriesList({ cities, isLoading }) {
    if (isLoading) return <Spinner />;
  
    if (!cities.length) return <Message message="Add your first country on the map" />
    
    const countries = cities.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country)) {
          return [...arr, { country: city.country, emoji: city.emoji }];
        } else {
          return arr;
        }
      }, []);

      console.log("here");
      console.log(countries);


      

    return (
      <ul className={styles.countryList}>
       {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
      </ul>
    );
  }
  

export default CountriesList;