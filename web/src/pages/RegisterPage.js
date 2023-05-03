import RegisterForm from "../components/formUser/formUser";
import PageLayout from '../components/layout/PageLayout';
import { Link } from 'react-router-dom'

import planeimage from '../../src/assets/img/plane2.png';
import './registerPage.css';

function RegisterPage() {
  return (
    <PageLayout>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mt-5">
          <div clasName="col-12">
            <div className="col-12">
              
            <div class="text-center">
              <h2>¡Bienvenido a bordo!</h2>
              <p>Al registrarte tendrás acceso a todas las reseñas y mucha más información<br/>
              <b>¡No te pierdas nada!</b></p>
              <img src={planeimage} alt="Register" className='planeimage'/>
            </div>
              <RegisterForm />
            </div>
          </div>

          
          <p className='m-0 text-muted registrado'>Already registered? just <Link to="/login">Login!</Link></p>
        </div>
      </div>
    </PageLayout>
  )
}

export default RegisterPage