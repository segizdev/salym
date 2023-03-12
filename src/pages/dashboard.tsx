import { LayoutAuth } from "@/components/LayoutAuth";
import { ReactElement } from "react";
import { Dashboard } from "@/components/Dashboard";
import { PolicyAuthed } from "@/lib/policy/authed";

export default function PageDashboard() {
  return <Dashboard />;
}

PageDashboard.policies = [PolicyAuthed];

PageDashboard.getLayout = (page: ReactElement) => {
  return <LayoutAuth>{page}</LayoutAuth>;
};
