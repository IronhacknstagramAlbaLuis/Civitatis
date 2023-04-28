import React from 'react';
import PageLayout from '../components/layout/PageLayout';

function Home () {
  return (
    <PageLayout title="Home">
      <section className="principalbaner">

   		  <div class="box search">
			    <h4>Llena tu viaje</h4>
         	<h3>Excursiones en español<br/> por todo el mundo</h3>
		    </div>

   		  <div class="box tips">
			    <div class="tip">
				    <p>Las mejores actividades</p>
			    </div>

			    <div class="tip">
				    <p>Atención al cliente 24/7</p>
			    </div>

			    <div class="tip">
				    <p>Miles de opiniones</p>
			    </div>

			    <div class="tip">
				    <p>Precios finales</p>
			    </div>
          
		    </div>
      </section>
    </PageLayout>
  )

}
export default Home