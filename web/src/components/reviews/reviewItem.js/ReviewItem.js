import  { useState, useEffect } from 'react'
import reviewService from '../../../services/reviews'

import './reviewItem.css';


function ReviewItem({ handleReview, id }) {

const handleSubmit = (event)=>{
  event.preventDefault();
  console.log(event.target.value)

  //reviewService.create()
    //.then((review)=> handleReview(id))
    //.catch((error)=> console.log(error))
}


  return (
    <div className="row formrow">
      <div className="col">
        <h5>Comparte tu experiencia</h5>
        <p>Ayuda a otros viajeros a preparar su viaje y cuenta qué te pareció esta experiencia</p>
      </div>
      <div className="col">
        <form onSubmit={handleSubmit}>
          <textarea id="review" name="review" placeholder="Cuentanos tu experiencia" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
    

  )
}

export default ReviewItem