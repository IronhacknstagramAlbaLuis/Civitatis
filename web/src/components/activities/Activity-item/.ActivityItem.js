import React from 'react';
import { Link } from 'react-router-dom'

function ActivityItem({ activity: {id , nameactivity, pics, price}  }) {

  return (
    <div>
      <h2><Link to={`/activities/${id}`}>{nameactivity}</Link></h2>
      <img src={pics} className='card-img' alt={nameactivity} />
      <p>{price}</p>
    </div>
  );
}
export default ActivityItem

