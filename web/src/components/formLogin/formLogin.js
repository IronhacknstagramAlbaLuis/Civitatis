import React, { useState, useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import loginService from '../../services/user'
import { AuthContext } from '../context/AuthStore';
import logimage from '../../../src/assets/img/civi_reg.png';

import './formLogin.css';

function LoginForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur'});
  const {serverError, setServerError } = useState()
  const { onUserChange } = useContext(AuthContext)
  const navigate = useNavigate( )

  const onLoginSubmit = (user) => {
    //setServerError()
    loginService.login(user)
    .then((user) => {
      onUserChange(user)
      navigate("/")

      })
    .catch(error => {
      const errors = error.response?.data?.errors;
      if(errors) {
        Object.keys(errors)
        .forEach((inputName)=> setError(inputName, errors[inputName]))
      }else {
        setServerError(error.message)
      }
    })
  }


   return (
      <div className="row">
        
        <div className="col-6">
          <img src={logimage} alt="Login" className='loginimage'/>
        </div>

        <div className="col-6 formulary">
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            <div>
              <input
                type="text"
                placeholder='User Name'
                id="username"
                {...register("username", {
                  required: true,
                })}
                />
            {errors.username && <span>This field is required, needs at least 3 chars, must be lowercase and without spaces</span>}
            </div>
            <div>
              <input
                type="password"
                placeholder='Password'
                id="password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && <span>This password is invalid</span>}
            </div>
        
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
);
}
    

export default LoginForm