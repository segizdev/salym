import { useState, ChangeEvent, FormEvent, MouseEventHandler, useEffect, MouseEvent } from "react";
import Link from "next/link";
import jwt_decode from "jwt-decode"
import Script from 'next/script'

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
type GoogleValues = {
  name?: string;
  picture?: string;
  _id?: number
};

export const Login = () => {
  const [active, setActive] = useState<boolean>(false);
  const [inputs, setInputs] = useState<FormValues>({});
  const [googleUser, setUser] = useState<GoogleValues>({})

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

  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential)
     const userObject: any = jwt_decode(response.credential)
     setUser(userObject)
     const element = document.getElementById("signInDiv") as HTMLButtonElement
     element.hidden = true
  }

   function handleSignOut(event: MouseEvent<HTMLButtonElement>) {
     setUser({})
     const element = document.getElementById("signInDiv") as HTMLButtonElement
     element.hidden = false
   }

useEffect(() => {
  /* global google */
  window.google?.accounts.id.initialize({
    client_id: "387501226115-1br36vrgtha4sl0enpe32374vv1u6mm3.apps.googleusercontent.com",
    callback: handleCallbackResponse
  })
  const element = document.getElementById("signInDiv") as HTMLButtonElement
  window.google?.accounts.id.renderButton(  
    element,
    {type: "standard", theme: "outline", size: "large" }
  )
   
  window.google?.accounts.id.prompt()

}, [])

  return (
    <div>
    <Script src="https://accounts.google.com/gsi/client" async defer />
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
        <div id="signInDiv" className={classes.google_signin}></div>
        {googleUser && <div className={classes.google_content}>
                <Link href={to.dashboard} className={classes.google_items}>
                  <img className={classes.google_picture} src={googleUser.picture} />
                  <span className={classes.google_user_name}>{googleUser.name}</span>
                </Link>
              { Object.keys(googleUser).length != 0 &&
                <Button variant="primary" click={(e) => handleSignOut(e)}>Выйти с аккаунта</Button>
              }
            </div>}
      </div>
      <div>
        <span>No account ?</span>
        <Link href={to.register}>Registration</Link>
      </div>
    </form>
    </div>
  );
};
