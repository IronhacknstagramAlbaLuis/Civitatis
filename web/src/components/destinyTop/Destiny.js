import React, { useEffect, useState } from 'react';
import activitiesService from '../../services/activities';

function Destiny() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    activitiesService.list(city)
      .then(city => {
        const uniqueDestinations = city.filter((item, index) => {
          return city.indexOf(item) === index;
        });
        setCity(uniqueDestinations);
      })
      .catch(error => console.error(error))
  }, [city]);

  return (
    <select className="form-select">
      {city.map(city => <option key={city.id}>{city.destiny}</option>)}
    </select>
  )
}

export default Destiny;