import React from 'react';

function ActivityDetail({ activity  }) {

  return (
    <div>
      <h2>{activity.nameactivity}</h2>
      <p>{activity.description}</p>
      <p>{activity.price}</p>
      <p>{activity.details}</p>
      <img src={activity.pics} alt={activity.nameactivity} />
    </div>
  );
}
export default ActivityDetail