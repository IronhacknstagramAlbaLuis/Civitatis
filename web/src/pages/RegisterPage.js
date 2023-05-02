import RegisterForm from "../components/formUser/formUser";
import PageLayout from '../components/layout/PageLayout';
import { Link } from 'react-router-dom'
import planeimage from '../../src/assets/img/plane.jpg';
import './registerPage.css';

function RegisterPage() {
  return (
    <PageLayout>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mt-5">
          <div className="max-auto mb-3 text-center">
            
          </div>
          <div clasName="col-12">
            <div className="col-2 plane1">
              <img src={planeimage} alt="Register" className='planeimage'/>
            </div>
            <div className="col-10 plane2">
            <div>
              <h2>¡Bienvenido a bordo!</h2>
              <p>Al registrarte tendrás acceso a todas las reseñas y mucha más información<br/>
              <b>¡No te pierdas nada!</b></p>
            </div>
              <RegisterForm />
            </div>
          </div>
          <hr />
          <p className='m-0 text-muted'>Already registered? just <Link to="/login">Login!</Link></p>
        </div>
      </div>
    </PageLayout>
  )
}

export default RegisterPage