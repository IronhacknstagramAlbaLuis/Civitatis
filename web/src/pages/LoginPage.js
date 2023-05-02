
import React from 'react';
import LoginForm from '../components/formLogin/formLogin'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout';



function LoginPage() {
  return (
    <PageLayout title="Sign up as user" >
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 mt-5">
          <div className="max-auto mb-3 text-center">
            <div>
              <h2>Login</h2>
              <p>Hemos añadido nuevos destinos y actividades<br/>
              <b>¡Nos encanta verte de vuelta!</b></p>
            </div>
          </div>
          <LoginForm/>
        </div>
      </div>
    </PageLayout>
  )
}

export default LoginPage

