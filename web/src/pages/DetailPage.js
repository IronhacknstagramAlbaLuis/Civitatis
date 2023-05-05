import React, { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import ActivitiesDetail from '../components/activities/Activities-Detail/ActivitiesDetail'
import './detailPage.css';
import ReviewsList from '../components/reviews/reviewList.js/ReviewList';
import ReviewItem from '../components/reviews/reviewItem.js/ReviewItem';
import activitiesService from "../services/activities";
import { Link } from 'react-router-dom';
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
    <div className='row menudestinos'>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Roma`}><p className='menudestinosp'>Roma</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Bali`}><p className='menudestinosp'>Bali</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=NuevaYork`}><p className='menudestinosp'>Nueva York</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Egipto`}><p className='menudestinosp'>Egipto</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Paris`}><p className='menudestinosp'>París</p></Link>
      </div>
      <div class="col">
        <Link to = {`/activities/filter?destiny=Londres`}><p className='menudestinosp'>Londres</p></Link>
      </div>
    </div>
      <div className='container'>
        <ActivitiesDetail/>
        <hr></hr>
        <div className="resenas">
          <h4>Reseñas</h4>
          <p  className='resenastext'>Opiniones de clientes reales que han reservado con nosotros.</p>
        </div>
        <ReviewsList reviews={reviews} handleReview={handleReview} id={id}/>
        <ReviewItem handleReview={handleReview} id={id}/>
      </div>
    </PageLayout>
  )
}

export default DetailPage