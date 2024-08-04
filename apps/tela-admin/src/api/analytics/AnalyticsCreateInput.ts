import { InputJsonValue } from "../../types";

export type AnalyticsCreateInput = {
  customerBehaviorData?: InputJsonValue;
  financialHealthData?: InputJsonValue;
  inventoryData?: InputJsonValue;
  salesData?: InputJsonValue;
};
