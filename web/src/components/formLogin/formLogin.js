import React, { useState, useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import loginService from '../../services/user'
import { AuthContext } from '../context/AuthStore';
import logimage from '../../../src/assets/img/civi_reg.png';

import './formLogin.css';

function LoginForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur'});
  const [serverError, setServerError ]= useState()
  const { onUserChange } = useContext(AuthContext)
  const navigate = useNavigate( )

  const onLoginSubmit = (user) => {
    setServerError(serverError)
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
        
        <div className="col">
          <img src={logimage} alt="Login" className='loginimage'/>
        </div>

        <div className="col formulary">
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            <div>
              <input
                type="text"
                placeholder='Nombre de usuario'
                id="username"
                {...register("username", {
                  required: true,
                })}
                />
            {errors.username && <span className="error">Este campo es obligatorio, debe tener al menos 3 caracteres, debe estar en minúscula</span>}
            </div>
            <div>
              <input
                type="password"
                placeholder='Contraseña'
                id="password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && <span className="error">La contraseña no es válida</span>}
            </div>
        
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
);
}
    

export default LoginForm