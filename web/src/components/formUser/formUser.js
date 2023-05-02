import React, {useState} from "react";
import { useForm } from "react-hook-form";
import userService from '../../services/user'

import './formUser.css';

function RegisterForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({mode: 'onBlur'});
  const onSubmit = (user) => {
    userService.create(user)
    .then(user => console.info(user))
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
            placeholder="Name"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && <span>This field is required and needs at least 3 chars</span>}
        </div>

        <div>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          />
          {errors.email &&<span>This field is required and must be a valid email address</span>}
        </div>

        <div>
          <input
            type="text"
            id="username"
            placeholder="User"
            {...register("username", {
              required: true,
              minLength: 3,
              pattern: /^[a-z0-9]+$/,
            })}
          />
          {errors.username && <span>This field is required, needs at least 3 chars, must be lowercase and without spaces</span>}
        </div>

        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && <span>This field is required and needs at least 8 chars</span>}
        </div>

        <div>
          <label htmlFor="confirm">Confirm:</label>
          <input
            type="checkbox"
            id="confirm"
            {...register("confirm")}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
  );
}

export default RegisterForm;