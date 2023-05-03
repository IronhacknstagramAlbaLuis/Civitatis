import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import activitiesService from '../../../services/activities';
import ActivityItem from '../Activity-item/.ActivityItem';
import './ActivitiesList.css';

function ActivitiesList() {
  const [activities, setActivities] = useState([]);

  useEffect(()=> {
    activitiesService.list()
    .then((activities) => setActivities(activities))
    .catch(error => console.error(error))
  }, []);

  return (
    <>
      <div className='row g-2 rowbox'>
        {activities.map((activity)=>(
            <div className='principalbox' key={activity.id}>
              <ActivityItem activity ={activity}/>
            </div>
      ))}

      </div>
        
    </>
  );
}

export default ActivitiesList;
