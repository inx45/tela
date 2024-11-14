import { JsonValue } from "type-fest";

export type Dashboard = {
  createdAt: Date;
  customerMetrics: JsonValue;
  expenses: number | null;
  id: string;
  profitMargins: number | null;
  sales: number | null;
  updatedAt: Date;
};
