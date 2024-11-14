import { InputJsonValue } from "../../types";

export type AnalyticsUpdateInput = {
  customerBehaviorData?: InputJsonValue;
  financialHealthData?: InputJsonValue;
  inventoryData?: InputJsonValue;
  salesData?: InputJsonValue;
};
