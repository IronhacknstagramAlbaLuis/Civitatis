import { useState, useEffect } from "react"

import activitiesService from "../../../services/activities";
import activities from "../../../services/activities";

function ReviewsList({ reviews, handleReview, id }) {
 
 

  useEffect(()=> {
    handleReview(id)
  }, [])

  return (
    <>
      <div className="row  g-2">
        {reviews.map((reviews)=>(
          <div className="d-flex align-items-stretch" key={reviews.id}>
            {reviews.review}
            {reviews.author.username}
          </div>
        ))}
      </div>
    </>
  )
}

export default ReviewsList