import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import "../index.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
import { Roboto } from "next/font/google";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={roboto.className}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
