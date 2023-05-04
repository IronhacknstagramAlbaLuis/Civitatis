import  { useState, useEffect } from 'react'
import reviewService from '../../../services/reviews'



function ReviewItem({ handleReview, id }) {

const handleSubmit = (event)=>{
  event.preventDefault();
  console.log(event.target.value)

  //reviewService.create()
    //.then((review)=> handleReview(id))
    //.catch((error)=> console.log(error))
}


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="review">Review</label>
      <textarea id="review" name="review" />
      <button type="submit">Submit</button>
    </form>

  )
}

export default ReviewItem