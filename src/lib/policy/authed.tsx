import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";

import { to } from "../to";

type Props = {
  children: ReactElement;
};

function PolicyAuthedInner({ children }: Props) {
  // TODO: update with real data

  const isProfileCurrentReady = true;
  const isAuthenticated = true;

  const [isReadyToRender, setIsReadyToRender] =
    useState<boolean>(isAuthenticated);

  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(to.login);
    } else {
      setIsReadyToRender(true);
    }
  }, [isAuthenticated, isProfileCurrentReady, router]);

  if (!isReadyToRender) return null;

  return children;
}

export const PolicyAuthed = (element: ReactElement) => {
  return <PolicyAuthedInner>{element}</PolicyAuthedInner>;
};
