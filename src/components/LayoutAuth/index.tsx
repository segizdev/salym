import { to } from "@/lib/to";
import { Button } from "@/UI/Button";
import { Logo } from "@/UI/Logo";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ReactElement } from "react";

import classes from "./index.module.css";

type Props = {
  children: ReactElement;
};

export const LayoutAuth = ({ children }: Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <NavigationMenu.Root className={classes.menu}>
          <NavigationMenu.List className={classes.list}>
            <NavigationMenu.Item>
              <Link href={to.landing}>
                <Logo />
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className={classes.links}>
              <Link href={to.login}>
                <Button variant="primary">Log in</Button>
              </Link>
              <Link href={to.register}>
                <Button variant="primary">Sign up</Button>
              </Link>
            <NavigationMenu.Item>
              <Link href={to.login}>
                <Button variant="primary">Log in</Button>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};
