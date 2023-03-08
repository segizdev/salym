import { Root, Image, AvatarFallback } from "@radix-ui/react-avatar";
import classes from "./index.module.css";

type Props = {
  src?: string;
  user: string;
  alt?: string;
};

export const Avatar = ({ src, user, alt = "" }: Props) => {
  const fallback = user ? user.charAt(0).toUpperCase() : "";

  return (
    <Root className={classes.wrapper}>
      <Image className={classes.avatar} src={src} alt={alt} />
      <AvatarFallback className={classes.fallback}>{fallback}</AvatarFallback>
    </Root>
  );
};
