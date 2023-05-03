import React from 'react';
import { Link } from 'react-router-dom'
import './ActivityItem.css';

function ActivityItem({ activity: {id , nameactivity, pics, price}  }) {

  return (
    <div className="card cardboxc">
      <Link to={`/activities/${id}`}><img src={pics} className="card-img-top" alt={nameactivity} /></Link>
      <div className="card-body">
        <p className="card-text"><Link to={`/activities/${id}`}>{nameactivity}</Link></p>
        <p>{price}</p>
      </div>
    </div>

  );
}
export default ActivityItem

