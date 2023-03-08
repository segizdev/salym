import { ReactElement } from "react";

import classes from "./index.module.css";

type Props = {
  children: ReactElement;
};

export const MainLayout = ({ children }: Props) => {
  return <div className={classes.main}>{children}</div>;
};
