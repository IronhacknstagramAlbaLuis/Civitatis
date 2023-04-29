import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import searchicon from'../assets/img/searchicon.png';

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
      <section className="principalsdestinies">
        <h2>Principales destinos</h2>
        <div className="destinos">
        <div className="destino roma">
              <p>Roma</p>
          </div>
          <div className="destino bali">
              <p>Bali</p>
          </div>
          <div className="destino ny">
              <p>Nueva York</p>
          </div>
        </div>
        <div className="destinos">
          
          <div className="destino elcairo">
              <p>El Cairo</p>
          </div>
          <div className="destino paris">
              <p>París</p>
          </div>
          <div className="destino londres">
              <p>Londres</p>
          </div>
        </div>
      </section>

      <section className="principalsativities">
        <h2>Actividades destacadas</h2>
        
      </section>
    </PageLayout>
  )

}
export default Home

