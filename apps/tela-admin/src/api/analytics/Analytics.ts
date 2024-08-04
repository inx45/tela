import { JsonValue } from "type-fest";

export type Analytics = {
  createdAt: Date;
  customerBehaviorData: JsonValue;
  financialHealthData: JsonValue;
  id: string;
  inventoryData: JsonValue;
  salesData: JsonValue;
  updatedAt: Date;
};
