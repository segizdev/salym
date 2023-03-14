import { ChangeEvent } from "react";
import classes from "./index.module.css";

type Props = {
  label: string;
  icon: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: ChangeEvent<HTMLInputElement>;
};

export const Input = ({
  label,
  icon,
  type,
  placeholder,
  onChange,
  name,
  value,
}: Props) => {
  return (
    <div className={classes.form}>
      <label className={classes.form_label} htmlFor="">
        {label}
      </label>
      <input
        className={classes.form_input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
};
