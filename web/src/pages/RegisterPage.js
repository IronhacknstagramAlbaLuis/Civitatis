import React, {useState} from "react";
import RegisterForm from "../components/formUser/formUser";
import PageLayout from '../components/layout/PageLayout';
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <PageLayout title="Sign up as student" >
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="max-auto mb-3 text-center">
            
          </div>
          <RegisterForm />
          <hr />
          <p className='m-0 text-muted'>Already registered? just <Link to="/login">Login!</Link></p>
        </div>
      </div>
    </PageLayout>
  )
}

export default RegisterPage