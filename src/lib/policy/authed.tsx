import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

import { to } from "../to";

type Props = {
  children: ReactElement;
};

function PolicyAuthedInner({ children }: Props) {
  const isProfileCurrentReady = true;
  const isAuthenticated = false;

  const [isReadyToRender, setIsReadyToRender] =
    useState<boolean>(isAuthenticated);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(to.login);
    } if (isAuthenticated) {
      router.push(to.register);
    }  else {
      setIsReadyToRender(true);
    }

  }, [isAuthenticated, isProfileCurrentReady, router]);

  if (!isReadyToRender) return null;

  return children;
}

export const PolicyAuthed = (element: ReactElement) => {
  return <PolicyAuthedInner>{element}</PolicyAuthedInner>;
};
