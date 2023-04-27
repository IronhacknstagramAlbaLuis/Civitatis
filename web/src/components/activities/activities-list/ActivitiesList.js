import React, { useEffect, useState } from 'react'
import activitiesService from '../../../services/activities'

function ActivitiesList() {
  const [activities, setActivities] = useState([])

  useEffect(()=> {
    activitiesService.list()
    .then((activities) => setActivities(activities))
    .catch(error => console.error(error))
  }, [])

  return (
    <>
      <h1>Civitatis</h1>
      {activities.map((activities) => 
        <div key={activities.id}>{activities.id}</div>)}
    </>
  )
}

export default ActivitiesList