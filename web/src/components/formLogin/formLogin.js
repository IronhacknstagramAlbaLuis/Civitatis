import React, { useState, useContext }  from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import loginService from '../../services/user'
import { AuthContext } from '../context/AuthStore';

function LoginForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur', });
  const {serverError, setServerError } = useState(undefined)
  const { onUserChange } = useContext(AuthContext)
  const navigate = useNavigate( )

  const onLoginSubmit = (user) => {
    // setServerError()
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
    
    <form onSubmit={handleSubmit(onLoginSubmit)}>
    

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: true,
          })}
        />
        {errors.username && <span>This field is required, needs at least 3 chars, must be lowercase and without spaces</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true})}
        />
        {errors.password && <span>This field is required and needs at least 8 chars</span>}
      </div>

      <button type="submit">Login</button>
    </form>
);
}
    

export default LoginForm