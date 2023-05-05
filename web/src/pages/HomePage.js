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
           <form className="d-flex" role="search">
              <input className="form-control me-2 searchform" type="search" placeholder="Where are you traveling to?" aria-label="Search"/>
              <button className="btn btn-outline-success enter" type="submit"><img src={searchicon} className='searchicon' alt="Go!"/></button>
           </form>
		    </div>

   		  <div className="box tips">
			    <div className="tip">
				    <p>Las mejores actividades</p>
			    </div>

			    <div className="tip">
				    <p>Atención al cliente 24/7</p>
			    </div>

			    <div className="tip">
				    <p>Miles de opiniones</p>
			    </div>

			    <div className="tip">
				    <p>Precios finales</p>
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

