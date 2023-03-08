import { Landing } from "@/components/Landing";
import { MainLayout } from "@/components/MainLayout";
import { ReactElement } from "react";

export default function Home() {
  return <Landing />;
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
