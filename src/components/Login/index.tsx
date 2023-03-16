import { useState, ChangeEvent, FormEvent, MouseEventHandler } from "react";
import Link from "next/link";

// @TODO Delete this packages later
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import { to } from "@/lib/to";
import classes from "./index.module.css";
import { Button } from "@/UI/Button";
import { Input } from "@/UI/Input";

type FormValues = {
  password?: string;
  email?: string;
};

export const Login = () => {
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
          rightIcon={{icon1: <IoEyeOffOutline />, icon2: <IoEyeOutline />, click: handlerMouses }}
        />
      <div className={classes.form_buttons}>
        <Link className={classes.form_link} href={to.register}>
          Forgot your password ?
        </Link>
        <Button variant="primary">Log in</Button>
      </div>
      <div className={classes.social_account}>
        <span className={classes.social_account_title}>login with account</span>
        <div>
          <Link className={classes.social_account_google} href={to.landing}>
            Google
          </Link>
        </div>
      </div>
      <div>
        <span>No account ?</span>
        <Link href={to.register}>Registration</Link>
      </div>
    </form>
  );
};
