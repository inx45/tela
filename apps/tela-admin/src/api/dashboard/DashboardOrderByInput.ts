import { SortOrder } from "../../util/SortOrder";

export type DashboardOrderByInput = {
  createdAt?: SortOrder;
  customerMetrics?: SortOrder;
  expenses?: SortOrder;
  id?: SortOrder;
  profitMargins?: SortOrder;
  sales?: SortOrder;
  updatedAt?: SortOrder;
};
