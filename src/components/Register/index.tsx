import React, { ChangeEvent, useState, FormEvent, MouseEventHandler } from "react";
import Link from "next/link";

// @TODO Delete this packages later
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { to } from "@/lib/to";
import classes from "./index.module.css";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";

type FormValues = {
  username?: string;
  password?: string;
  email?: string;
};

export const Register = () => {
  const [active, setActive] = useState<boolean>(false);
  const [inputs, setInputs] = useState<FormValues>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlerMouses: MouseEventHandler<HTMLButtonElement> = () => {
    setActive(!active)
  }

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
        <Input
          type={!active ? "password" : "text"}
          placeholder="Enter password..."
          label="Password"
          onChange={handleChange}
          name="password"
          value={inputs.password || ""}
          active={active}
          rightIcon={{icon1: <IoEyeOffOutline />, icon2: <IoEyeOutline />, click: handlerMouses}}
        />
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
