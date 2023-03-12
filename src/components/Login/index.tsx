import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios';

import classes from "./index.module.css";

type FormValues = {
  firstName: string;
  password: string;
  email: string;
};

export const Login = () => {
  const {
    formState,
    reset,
    register,
    handleSubmit,
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const body = {
      firstName: data.firstName,
      email: data.email,
      password: data.password,
    }
  
    axios
      .post("", body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return <div className={classes.login}>
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <input type="email" {...register("email")} />
      <input type="password" {...register("password")} />

      <input type="submit" />
    </form>
  </div>;
};
