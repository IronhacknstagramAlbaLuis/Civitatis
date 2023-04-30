

import React, {useState} from "react";
import { useForm } from "react-hook-form";
import studentsService from '../../services/users'


function RegisterForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({mode: 'onBlur'});
  const onSubmit = (user) => {
    studentsService.create(user)
    .then(user => console.info(user))
    .catch(error => error.response?.data?.errors || {});
    Object.keys(errors)
      .forEach((inputName)=> {setError(inputName, {message: errors[inputName]})})
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && <span>This field is required and needs at least 3 chars</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
          />
          {errors.email &&<span>This field is required and must be a valid email address</span>}
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: true,
              minLength: 3,
              pattern: /^[a-z0-9]+$/,
            })}
          />
          {errors.username && <span>This field is required, needs at least 3 chars, must be lowercase and without spaces</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
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