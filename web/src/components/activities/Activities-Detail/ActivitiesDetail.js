
import React, { useEffect, useState } from 'react';
import { useParams } from  'react-router-dom';
import activitiesService from '../../../services/activities'

function ActivitiesDetail() {

  const { id } = useParams();
  const [activity, setActivity] = useState( );

  useEffect(() => {
    async function fetchActivity() {
      try {
        const activity = await activitiesService.detail(id)
        setActivity(activity)
      } catch (error) {
        console.error(error);
      }
    }
    fetchActivity()
  }, [id]);

  return (
    <>
       { !activity ? (<p>Loading activity...</p>) :(
        <>
        <h1>{activity}</h1>
        </>
       )}
    </>
    
    
  )
}

export default ActivitiesDetail;