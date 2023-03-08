import { Landing } from "@/components/Landing";
import { LayoutAuth } from "@/components/LayoutAuth";
import { ReactElement } from "react";

export default function Home() {
  return <Landing />;
}

Home.getLayout = (page: ReactElement) => {
  return <LayoutAuth>{page}</LayoutAuth>;
};
