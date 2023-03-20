import { MouseEventHandler } from "react";
import clsx from "clsx";
import classes from "./index.module.css";

type Props = {
  children: string;
  variant: "primary" | "secondary" | "transparent";
  click?: MouseEventHandler<HTMLButtonElement>
};

export const Button = ({ children, variant, click }: Props) => {
  return (
    <button
      className={clsx(classes.button, {
        [classes.primary]: variant === "primary",
        [classes.secondary]: variant === "secondary",
        [classes.transparent]: variant === "transparent",
      })}
      onClick={click}
    >
      {children}
    </button>
  );
};
