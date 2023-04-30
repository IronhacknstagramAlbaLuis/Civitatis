
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import ActivityItem from '../Activity-item/.ActivityItem';
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
     {activity ? <ActivityItem activity={activity} /> : <p>Loading activity...</p>}
    </PageLayout>
  )
}

export default ActivitiesDetail;