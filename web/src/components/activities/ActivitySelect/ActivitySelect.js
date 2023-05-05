import React,{ useState, useEffect } from 'react'
import activityQuery from '../../../services/activities'
import { useSearchParams} from 'react-router-dom'
import ActivityItem from '../Activity-item/.ActivityItem';
import './activitySelect.css';



function ActivitySelect() {
  const [searchParams] = useSearchParams()
  const [activities, setActivities] = useState([])

  useEffect(()=> {
    const query = {};
    const activity = searchParams.get('destiny');
    
    if(activity) query.destiny = activity;

    activityQuery.detailQuery(query)
      .then((activities)=>{setActivities(activities)})
      .catch(error => console.error(error))
  },[searchParams])


  return (

    <div className='container'>
      <div className='row g-2 rowbox'>
        {activities.map((activity)=>(
          <div key={activity.id} className="principalbox">
                <ActivityItem activity={activity}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivitySelect