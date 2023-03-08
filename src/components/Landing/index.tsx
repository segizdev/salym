import { to } from "@/lib/to";
import { Button } from "@/UI/Button";
import { Logo } from "@/UI/Logo";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

import classes from "./index.module.css";

export const Landing = () => {
  return (
    <>
      <NavigationMenu.Root className={classes.menu}>
        <NavigationMenu.List className={classes.list}>
          <NavigationMenu.Item>
            <Logo />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href={to.dashboard}>
              <Button variant="primary">Log in</Button>
            </Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div className={classes.content}>
        <h1 className={classes.heading}>
          Приложение для учета личных финансов
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          quibusdam cum blanditiis sed libero consequatur vel quae consequuntur,
          molestiae quo quas praesentium tempore sapiente, dignissimos dolorum,
          ex quidem expedita totam.
        </p>
      </div>
    </>
  );
};
