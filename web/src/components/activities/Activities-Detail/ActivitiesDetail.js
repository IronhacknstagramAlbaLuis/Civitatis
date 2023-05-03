
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from  'react-router-dom';
import activitiesService from '../../../services/activities';
import cancelacionimg from'../../../assets/img/euro.png';
import hotelimg from'../../../assets/img/hotel.png';
import roma from'../../../assets/img/roma-m.avif';
import './activitiesDetail.css';

function ActivitiesDetail() {

  const { id } = useParams();
  const navigate =useNavigate()
  const [activity, setActivity] = useState();

  useEffect(() => {
    async function fetchActivity() {
      try {
        const activity = await activitiesService.detail(id)
        
        setActivity(activity)
        console.log(activity)
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if(statusCode === 400) {
          navigate('/activities')
        }
      }
    }
    fetchActivity()
  }, [id]);

  return (
    <>
       { !activity ? (<p>Loading activity...</p>) :(
        <div className='row totalactivity'>
          <div className="col-12 col-sm-6 col-md-8">
            <h1><b>{activity.nameactivity}</b></h1>
            <p><p className='destinotext'>{activity.destiny}</p><span className='verde'><img src={cancelacionimg} className='activityicon' alt="cancelacion"/>Cancelación gratuita</span>
            <span className='gris'><img src={hotelimg} className='activityicon' alt="Recogida"/>Recogida en el hotel</span></p>
          </div>
          <div className="col-6 col-md-4 alignri">
            <p className='precio'>{activity.price}xx€</p>
            <Link to="https://www.paypal.com/es/webapps/mpp/home" className='boton' target='_blank'>Comprar</Link>
          </div>
          <div className='col-6 col-md-4 rosa descripciondestacada'>
            <h4>Descripción</h4>
            <p  className='descipciontextdes'>{activity.description}</p>
          </div>
          <div id="carouselExample" className="carousel slide col-12 col-sm-6 col-md-8">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={roma} className='carrou' alt="imagen1"/>
              </div>
              <div className="carousel-item">
                <img src={roma} className='carrou' alt="imagen2"/>
              </div>
              <div className="carousel-item">
                <img src={roma} className='carrou' alt="imagen3"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          
          <div className="descripcion">
            <h4>Descripción</h4>
            <p  className='descipciontext'>{activity.description}</p>
          </div>
          <div className="detalles">
            <h4>Detalles</h4>
            <div class="row">
              <div class="col-6 col-md-1 backclaro rosa">
                <p>Duración</p>
              </div>
              <div class="col-md-9 backclaro">
                <p>50min</p>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-1 backclaro rosa">
                <p>Idioma</p>
              </div>
              <div class="col-md-9 backclaro">
                <p>La actividad se realiza con un guía español o inglés en función de la modalidad.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-1 backclaro rosa">
                <p>Incluido</p>
              </div>
              <div class="col-md-9 backclaro">
                <ul>
                  <li>Recogida y traslado de regreso al hotel.</li>
                  <li>Guía local de habla española o inglesa, conocedor de la cultura balinesa y de la zona.</li>
                  <li>Transporte en vehículo privado con aire acondicionado.</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-1 backclaro rosa">
                <p>No incluido</p>
              </div>
              <div class="col-md-9 backclaro">
                <p>Comida y entradas.</p>
              </div>
            </div>
            <div className="cancelación">
            <h4>Cancelación</h4>
            <p  className='descipciontext'>¡Gratis! Cancela sin gastos hasta 3 días antes de la actividad. Si cancelas con menos tiempo, llegas tarde o no te presentas, no se ofrecerá ningún reembolso. </p>
          </div>
          </div>
        </div> 
       )}
    </>
    
    
  )
}

export default ActivitiesDetail;