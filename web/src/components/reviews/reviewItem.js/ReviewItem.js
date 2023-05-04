import  { useState, useEffect } from 'react'
import reviewService from '../../../services/reviews'



function ReviewItem() {

const [review, setReviews] = useState("")

const handleSubmit = (event)=>{
  event.preventDefault()
}


const handleChange = (event) => {
  setReviews(event.target.value);
};

useEffect(()=>{
  reviewService.create()
  .then((review)=>setReviews(review))
  .catch((error)=> console.log(error))

},[review])


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="review">Review</label>
        <textarea id="review" name="review" value={review} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>

  )
}

export default ReviewItem