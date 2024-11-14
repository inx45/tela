import { InputJsonValue } from "../../types";

export type DashboardCreateInput = {
  customerMetrics?: InputJsonValue;
  expenses?: number | null;
  profitMargins?: number | null;
  sales?: number | null;
};
