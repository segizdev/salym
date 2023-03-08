import { ReactElement } from "react";

import styles from "./index.module.css";

type Props = {
  children: ReactElement;
};

export const MainLayout = ({ children }: Props) => {
  return <div className={styles.main}>{children}</div>;
};
