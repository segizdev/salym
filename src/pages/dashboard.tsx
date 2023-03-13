import { ReactElement } from "react";
import { Dashboard } from "@/components/Dashboard";
import { PolicyAuthed } from "@/lib/policy/authed";
import { LayoutMain } from "@/components/LayoutMain";

export default function PageDashboard() {
  return <Dashboard />;
}

PageDashboard.policies = [PolicyAuthed];

PageDashboard.getLayout = (page: ReactElement) => {
  return <LayoutMain>{page}</LayoutMain>;
};
