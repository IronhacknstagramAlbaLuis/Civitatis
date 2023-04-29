import React from 'react';
import PageLayout from '../components/layout/PageLayout';

function Home () {
  return (
    <PageLayout>
      <section className="principalbaner">
   		  <div className="box search">
			    <h4>Llena tu viaje</h4>
         	<h3>Excursiones en español<br/> por todo el mundo</h3>

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
    </PageLayout>
  )

}
export default Home