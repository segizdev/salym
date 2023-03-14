import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { to } from "@/lib/to";
import classes from "./index.module.css";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";

type FormValues = {
  username: string;
  password: string;
  email: string;
};

export const Register = () => {
  const isActive = false;
  const [active, setActive] = useState<boolean>(isActive);
 const [inputs, setInputs] = useState({});

  const handleSubmit: SubmitHandler<FormValues> = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Input
        type="text"
        placeholder="Enter firstName..."
        label="Name"
        onChange={handleChange}
        name="username"
        value={inputs.username || ""}
      />
      <Input
        type="email"
        placeholder="Enter email..."
        label="Email"
        onChange={handleChange}
        name="email"
        value={inputs.email || ""}
      />
      <div className={classes.form_input_password}>
        <Input
          type={active === false ? "password" : "text"}
          placeholder="Enter password..."
          label="Password"
          onChange={handleChange}
          name="password"
          value={inputs.password || ""}
        />
        {active === false ? (
          <IoEyeOffOutline
            className={classes.input_eye}
            onClick={() => setActive(true)}
          />
        ) : (
          <IoEyeOutline
            className={classes.input_eye}
            onClick={() => setActive(false)}
          />
        )}
      </div>
        <Button variant="primary">
          Registration
        </Button>
      <div>
        <span>Already registered ?</span>
        <Link href={to.login}>sign in</Link>
      </div>
    </form>
  );
};
