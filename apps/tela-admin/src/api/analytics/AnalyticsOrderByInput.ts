import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  createdAt?: SortOrder;
  customerBehaviorData?: SortOrder;
  financialHealthData?: SortOrder;
  id?: SortOrder;
  inventoryData?: SortOrder;
  salesData?: SortOrder;
  updatedAt?: SortOrder;
};
