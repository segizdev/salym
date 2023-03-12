import { Login } from "@/components/Login";
import { LayoutAuth } from "@/components/LayoutAuth";
import { ReactElement } from "react";

export default function PageLogin() {
  return <Login />;
}

PageLogin.getLayout = (page: ReactElement) => {
  return <LayoutAuth>{page}</LayoutAuth>;
};
