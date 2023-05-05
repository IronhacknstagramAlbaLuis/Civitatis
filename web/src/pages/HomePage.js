import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import searchicon from'../assets/img/searchicon.png';
import Destiny from '../components/destinyTop/Destiny'
import ActivitiesList from '../components/activities/activities-list/ActivitiesList';
import { Link } from 'react-router-dom';

import './homePage.css';


function Home () {
  return (
    <PageLayout>
      <section className="principalbaner">
   		  <div className="box search">
			    <h3>Llena tu viaje</h3>
         	<h1>Excursiones en español por todo el mundo</h1>
            <button className="btn"><span>¿Donde vas a viajar?</span><i class="material-icons">public</i>
              <ul className="dropdown menuanim">
                <li className="active"><Link to = {`/activities/filter?destiny=Roma`}><p>Roma</p></Link></li>
                <li><Link to = {`/activities/filter?destiny=Bali`}><p>Bali</p></Link></li>
                <li><Link to = {`/activities/filter?destiny=NuevaYork`}><p>Nueva York</p></Link></li>
                <li><Link to = {`/activities/filter?destiny=Egipto`}><p>Egipto</p></Link></li>
                <li><Link to = {`/activities/filter?destiny=Paris`}><p>París</p></Link></li>
                <li><Link to = {`/activities/filter?destiny=Londres`}><p>Londres</p></Link></li>
              </ul>
            </button>
		    </div>

   		  <div className="box tips">
			    <div className="tip">
            <p><span class="material-icons">celebration</span>Las mejores actividades</p>
			    </div>

			    <div className="tip">
				    <p><span class="material-icons">support_agent</span>Atención al cliente 24/7</p>
			    </div>

			    <div className="tip">
				    <p><span class="material-icons">remove_red_eye</span>Miles de opiniones</p>
			    </div>

			    <div className="tip">
				    <p><span class="material-icons">credit_card</span>Precios finales</p>
			    </div>

		    </div>
      </section>
      <section className="principalsdestinies container">
        <h2>Principales destinos</h2>
        <div className="destinos">
       
        <div className="destino roma">
              <Link to = {`/activities/filter?destiny=Roma`}><p>Roma</p></Link>
          </div>
          <div className="destino bali">
              <Link to = {`/activities/filter?destiny=Bali`}><p>Bali</p></Link>
          </div>
          <div className="destino ny">
            <Link to = {`/activities/filter?destiny=NuevaYork`}><p>Nueva York</p></Link>
          </div>
        </div>
        <div className="destinos">
          
          <div className="destino elcairo">
            <Link to = {`/activities/filter?destiny=Egipto`}><p>Egipto</p></Link>
          </div>
          <div className="destino paris">
            <Link to = {`/activities/filter?destiny=Paris`}><p>París</p></Link>
          </div>
          <div className="destino londres">
            <Link to = {`/activities/filter?destiny=Londres`}><p>Londres</p></Link>
          </div>
        </div>
      </section>

      <section className="principalsativities container">
        <h2>Actividades destacadas</h2>
        <ActivitiesList/>
      </section>
    </PageLayout>
  )

}
export default Home

