import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type AnalyticsWhereInput = {
  customerBehaviorData?: JsonFilter;
  financialHealthData?: JsonFilter;
  id?: StringFilter;
  inventoryData?: JsonFilter;
  salesData?: JsonFilter;
};
