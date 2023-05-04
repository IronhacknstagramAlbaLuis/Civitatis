import React from 'react'
import PageLayout from '../components/layout/PageLayout'
import ActivitiesDetail from '../components/activities/Activities-Detail/ActivitiesDetail'
import './detailPage.css';
import ReviewsList from '../components/reviews/reviewList.js/ReviewList';
import ReviewItem from '../components/reviews/reviewItem.js/ReviewItem';



function DetailPage() {
  return (
    <PageLayout>
      <div className='container'>
        <ActivitiesDetail/>
        <ReviewsList/>
        <ReviewItem/>
        
      </div>
    </PageLayout>
  )
}

export default DetailPage