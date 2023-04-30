import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import activitiesService from '../../../services/activities';

function ActivitiesList() {
  const [activities, setActivities] = useState([]);

  useEffect(()=> {
    activitiesService.list()
    .then((activities) => setActivities(activities))
    .catch(error => console.error(error))
  }, [activities]);

  return (
    <>
      {activities.map((activity) => 
        
          <div key={activity.id} >
            <p><Link  to={`/activities/${activity.id}`}>{activity.nameactivity}</Link></p>
            <p>{activity.description}</p>
            <p>{activity.price}</p>
            <p>{activity.details}</p>
            <img src={activity.pics} alt="Coliseo Roma" />
         </div>
        
      )}
    </>
  );
}

export default ActivitiesList;
