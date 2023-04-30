
import React from 'react';
import LoginForm from '../components/formLogin/formLogin'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout';



function LoginPage() {
  return (
    <PageLayout title="Sign up as user" >
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="max-auto mb-3 text-center">
          </div>
          <LoginForm/>
          <hr />
        
        </div>
      </div>
    </PageLayout>
  )
}

export default LoginPage

