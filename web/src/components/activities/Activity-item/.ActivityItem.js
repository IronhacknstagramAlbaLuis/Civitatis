import React from 'react';
import { Link } from 'react-router-dom'
import activities from '../../../services/activities';

function ActivityItem({ activity: {id , nameactivity, pics}  }) {

  return (
    <div>
      <h2><Link to={`/activities/${id}`}>{nameactivity}</Link></h2>
      <img src={pics} className='card-img' alt={nameactivity} />
    </div>
  );
}
export default ActivityItem

