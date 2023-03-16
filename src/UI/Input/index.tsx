import { ChangeEventHandler, MouseEventHandler } from "react";
import classes from "./index.module.css";

type Props = {
  label: string;
  leftIcon?: {
    icon1?: JSX.Element,
    icon2?: JSX.Element,
    click?: MouseEventHandler<HTMLButtonElement>
  };
  rightIcon?: {
    icon1?: JSX.Element,
    icon2?: JSX.Element,
    click?: MouseEventHandler<HTMLButtonElement>
  };
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  active?: boolean
};

export const Input = ({
  label,
  leftIcon,
  rightIcon,
  type,
  placeholder,
  onChange,
  name,
  value,
  active
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
      <div className={classes.form_leftIcon}>
        {!active ? (
              <button
                className={classes.form_button}
                onClick={leftIcon?.click}
              >
                {leftIcon?.icon1}
                </button>
            ) : (
              <button
                className={classes.form_button}
                onClick={leftIcon?.click}
              >
                {leftIcon?.icon2}
                </button>
          )}
      </div>      
      <div className={classes.form_rightIcon}>
        {!active ? (
            <button
              className={classes.form_button}
              onClick={rightIcon?.click}
            >
              {rightIcon?.icon1}
              </button>
          ) : (
            <button
              className={classes.form_button}
              onClick={rightIcon?.click}
            >
              {rightIcon?.icon2}
              </button>
        )}
      </div>      
    </div>
  );
};
