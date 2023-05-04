import { useState, useEffect } from "react"
import { useParams } from  'react-router-dom';
import activitiesService from "../../../services/activities";
import activities from "../../../services/activities";

function ReviewsList() {

  const { id } = useParams()
  const [reviews, setReviews] = useState ([]);

  const reload = () => {
    activitiesService.detail(id)
      .then((activity) => setReviews(activity.reviews))
  }

  useEffect(()=> {
    reload()
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