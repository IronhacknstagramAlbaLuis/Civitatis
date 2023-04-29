import React, { useEffect, useState } from 'react'
import activitiesService from '../../../services/activities'

function ActivitiesList() {
  const [activities, setActivities] = useState([])

  useEffect(()=> {
    activitiesService.list()
    .then((activities) => setActivities(activities))
    .catch(error => console.error(error))
  }, [activities])

  return (
    <>
      {activities.map((activities) => 
        <div key={activities.id}>
          <p>{activities.nameactivity}</p>
          <p> {activities.description}</p>
          <p>{activities.price}</p>
          <p>{activities.details}</p>
          <img src={activities.pics} alt="Coliseo Roma" />
       </div>)}
       
    </>
  )
}

export default ActivitiesList