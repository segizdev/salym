import { Register } from "@/components/Register";
import { LayoutAuth } from "@/components/LayoutAuth";
import { ReactElement } from "react";

export default function PageRegister() {
  return <Register />;
}

PageRegister.getLayout = (page: ReactElement) => {
  return <LayoutAuth>{page}</LayoutAuth>;
};
