import { InputJsonValue } from "../../types";

export type DashboardUpdateInput = {
  customerMetrics?: InputJsonValue;
  expenses?: number | null;
  profitMargins?: number | null;
  sales?: number | null;
};
