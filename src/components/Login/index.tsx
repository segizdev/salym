import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios';
import Link from "next/link";
import  { IoEyeOffOutline,IoEyeOutline } from 'react-icons/io5'

import { to } from "@/lib/to";
import classes from "./index.module.css";
import { Button } from "@/UI/Button";
import { Form } from "@/helpers/form"

type FormValues = {
  firstName: string;
  password: string;
  email: string;
};

export const Login = () => {
  const isActive = false
  const [active, setActive] = useState<boolean>(isActive);
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
    <input className={classes.form_input} type="email" {...register("email", Form.Options.email)} placeholder="Enter email..." />
      {
        formState.errors.email && <span className={classes.input_error}> {formState.errors.email.message} </span>
      }
      <div className={classes.form_input_password}>
      <input className={classes.form_input} type={active === false ? 'password' : 'text'} {...register("password", Form.Options.password)} placeholder="Enter password..." />
      {
          active === false ?
          <IoEyeOffOutline
            className={classes.input_eye}
            onClick={() => setActive(true)}
          />
          :
          <IoEyeOutline
            className={classes.input_eye}
            onClick={() => setActive(false)}
          />
        }
      </div>
      {
        formState.errors.password && <span className={classes.input_error}> {formState.errors.password.message} </span>
      }
        <Button variant="primary">Send</Button>
    </form>
  </div>;
};
