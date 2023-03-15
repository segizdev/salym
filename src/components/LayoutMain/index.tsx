import { to } from "@/lib/to";
import { Avatar } from "@/UI/Avatar";
import { Button } from "@/UI/Button";
import { Logo } from "@/UI/Logo";
import { Typography } from "@/UI/Typography";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import Link from "next/link";
import { ReactElement, useState } from "react";

import classes from "./index.module.css";

type Props = {
  children: ReactElement;
};

export const LayoutMain = ({ children }: Props) => {
  const user = "Ulan";

  const [isMenuOpen, setIsMenuOopen] = useState<boolean>(true);
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleMenu = () => setIsMenuOopen((previous) => !previous);

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>{children}</div>

      <div className={classes.buttonWrapper}>
        <Button variant="primary" onClick={toggleMenu}>
          {isMenuOpen ? "OPEN" : "CLOSE"}
        </Button>
      </div>

      <div
        className={clsx(classes.main, {
          [classes.open]: isMenuOpen,
        })}
      >
        <NavigationMenu.Root
          className={classes.menu}
          orientation="vertical"
        >
          <div className={classes.userBlock}>
            <div>
              <Typography>Hey, wazzup </Typography>
              <Typography variant="h2">{user}</Typography>
            </div>

            <Avatar
              user="Ulan"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
          </div>

          {!toggle ? (
            <button
              className={classes.burgerOpen}
              onClick={() => setToggle(true)}
            >
              <span className={classes.burgerOpen_line} />
            </button>
          ) : (
            <button
              className={classes.burgerClose}
              onClick={() => setToggle(false)}
            ></button>
          )}

          <NavigationMenu.List className={classes.list}>
            <NavigationMenu.Item>
              <Link href={to.landing}>
                <Logo />
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href={to.login}>
                <Button variant="primary">Log in</Button>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  );
};
