import _ from "lodash";
import { ReactElement } from "react";

export type Policy = (element: ReactElement) => ReactElement;

export const withPolicies = (policies: Policy[]) => {
  const WithPolicies = (page: ReactElement) => {
    const WithPoliciesComponent = _.flowRight(policies)(page);

    return WithPoliciesComponent;
  };

  return WithPolicies;
};
