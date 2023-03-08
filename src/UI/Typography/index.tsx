import clsx from "clsx";
import { ReactElement } from "react";
import classes from "./index.module.css";

type TagNameMap = "p" | "h1" | "h2";

type Props = {
  variant: TagNameMap;
  color: "basic";
  children: ReactElement;
};

export const Typography = ({ variant, color, children }: Props) => {
  const Component = variant ?? "p";

  return (
    <Component
      className={clsx(
        classes.typography,

        {
          [classes.p]: variant === "p",
          [classes.h1]: variant === "h1",
          [classes.h2]: variant === "h2",
        }
      )}
    >
      {children}
    </Component>
  );
};
