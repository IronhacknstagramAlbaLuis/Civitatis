import { useState, useEffect } from "react"

import activitiesService from "../../../services/activities";
import activities from "../../../services/activities";
import usericonpink from'../../../assets/img/usericon-pink.png'
import './reviewList.css';

function ReviewsList({ reviews, handleReview, id }) {
 
 

  useEffect(()=> {
    handleReview(id)
  }, [])

  return (
    <>
      <div className="row  g-2">
        {reviews.map((reviews)=>(
          <div className="resenabox" key={reviews.id}>
            
            <p><img src={usericonpink} className='usericon pink' alt="user"/><b>{reviews.author.username}</b></p>
            {reviews.review}
          </div>
        ))}
      </div>
    </>
  )
}

export default ReviewsList