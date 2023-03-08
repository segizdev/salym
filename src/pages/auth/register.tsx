import { LayoutAuth } from "@/components/LayoutAuth";
import { ReactElement } from "react";

export default function PageRegister() {
  return <div>Register</div>;
}

PageRegister.getLayout = (page: ReactElement) => {
  return <LayoutAuth>{page}</LayoutAuth>;
};
