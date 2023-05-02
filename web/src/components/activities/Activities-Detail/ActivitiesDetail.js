
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from  'react-router-dom';
import activitiesService from '../../../services/activities'

function ActivitiesDetail() {

  const { id } = useParams();
  const navigate =useNavigate()
  const [activity, setActivity] = useState();

  useEffect(() => {
    async function fetchActivity() {
      try {
        const activity = await activitiesService.detail(id)
        
        setActivity(activity)
        console.log(activity)
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if(statusCode === 400) {
          navigate('/activities')
        }
      }
    }
    fetchActivity()
  }, [id]);

  return (
    <>
       { !activity ? (<p>Loading activity...</p>) :(
        <>
        <h1>{activity.nameactivity}</h1>
        </>
       )}
    </>
    
    
  )
}

export default ActivitiesDetail;