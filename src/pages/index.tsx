import { Landing } from "@/components/landing";
import { MainLayout } from "@/components/mainLayout";
import { ReactElement } from "react";

export default function Home() {
  return <Landing />;
}

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
