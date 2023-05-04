import React, { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import ActivitiesDetail from '../components/activities/Activities-Detail/ActivitiesDetail'
import './detailPage.css';
import ReviewsList from '../components/reviews/reviewList.js/ReviewList';
import ReviewItem from '../components/reviews/reviewItem.js/ReviewItem';
import activitiesService from "../services/activities";
import { useParams } from  'react-router-dom';



function DetailPage() {

  const [reviews, setReviews] = useState ([]);
  const { id } = useParams()

  const handleReview = (id) => {
    activitiesService.detail(id)
      .then((activity) => setReviews(activity.reviews))
  }

  return (
    <PageLayout>
      <div className='container'>
        <ActivitiesDetail/>
        <ReviewsList reviews={reviews} handleReview={handleReview} id={id}/>
        <ReviewItem handleReview={handleReview} id={id}/>
        
      </div>
    </PageLayout>
  )
}

export default DetailPage