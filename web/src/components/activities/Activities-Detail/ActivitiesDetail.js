
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import ActivityDetail from '../components/activities/Activities-Detail/ActivitiesDetail';
import { useParams } from  'react-router-dom';
import activitiesService from '../services/activities';

function ActivitiesDetail() {

  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    activitiesService.detail(id)
      .then(activity => setActivity(activity))
      .catch(error => console.error(error))
  }, [id]);

  return (
    <PageLayout>
     {activity ? <ActivityDetail activity={activity} /> : <p>Loading activity...</p>}
    </PageLayout>
  )
}

export default ActivitiesDetail;