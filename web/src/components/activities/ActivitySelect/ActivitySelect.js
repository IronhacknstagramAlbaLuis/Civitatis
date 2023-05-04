import React,{ useState, useEffect } from 'react'
import activityQuery from '../../../services/activities'
import { useSearchParams} from 'react-router-dom'
import ActivityItem from '../Activity-item/.ActivityItem';

function ActivitySelect() {
  const [searchParams] = useSearchParams()
  const [activities, setActivities] = useState([])

  useEffect(()=> {
    const query = {}
    const activity = searchParams.get('destiny')
    if(activity) query.destiny = activity

    activityQuery.detailQuery(query)
    .then((activities)=>{setActivities(activities)})
    .catch(error => console.error(error))
  },[searchParams])
  console.log(activities)
  return (
    <div>
      {activities.map((activity)=>(
        <div key={activity.id}>
          <ActivityItem activity={activities}/>
        </div>
      ))}
    </div>
  )
}

export default ActivitySelect