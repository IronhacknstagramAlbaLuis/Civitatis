import React, {useState} from "react";
import { useForm } from "react-hook-form";
import userService from '../../services/user'
import { useNavigate } from 'react-router-dom'
import './formUser.css';

function RegisterForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({mode: 'onBlur'});
  const navigate = useNavigate( )
  const onSubmit = (user) => {
    userService.create(user)
    .then(user => {console.info(user)
      navigate("/login")
    })
    .catch(error => error.response?.data?.errors || {});
    Object.keys(errors)
      .forEach((inputName)=> {setError(inputName, {message: errors[inputName]})})
  };
  

  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && <span className="error">Este campo es obligatorio, debe tener al menos 3 caracteres</span>}
        </div>

        <div>
          <input
            type="text"
            id="lastname"
            placeholder="Apellidos"
            {...register("lastname", { required: true, minLength: 3 })}
          />
          {errors.name && <span className="error">Este campo es obligatorio, debe tener al menos 3 caracteres</span>}
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          />
          {errors.email &&<span className="error">Este campo es obligatorio, debe ser una dirección válida</span>}
        </div>

        <div>
          <input
            type="text"
            id="username"
            placeholder="Usuario"
            {...register("username", {
              required: true,
              minLength: 3,
              pattern: /^[a-z0-9]+$/,
            })}
          />
          {errors.username && <span className="error">Este campo es obligatorio, debe tener al menos 3 caracteres, en minúsculas y sin espacios</span>}
        </div>

        <div>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && <span className="error">Este campo es obligatorio, debe tener al menos 8 caracteres</span>}
        </div>

        <div>
          
          <input
            type="checkbox"
            id="confirm"
            {...register("confirm")}
          />
          <label htmlFor="confirm" className="confirm">Acepto política de privacidad y condiciones generales</label>
        </div>

        <button type="submit">Guardar</button>
      </form>
  );
}

export default RegisterForm;