import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Policy, withPolicies } from "@/lib/withPolicies";

import "../index.css";

type NextPageEnhanced = ReactElement & {
  getLayout?: (
    page: ReactElement,
    pageProps: Record<string, any>
  ) => ReactElement;
  policies?: Policy[];
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageEnhanced;
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const policies = [...(Component.policies || [])];

  return (
    <main className={roboto.className}>
      {withPolicies(policies)(
        getLayout(<Component {...pageProps} />, pageProps)
      )}
    </main>
  );
}
