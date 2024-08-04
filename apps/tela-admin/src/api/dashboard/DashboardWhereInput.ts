import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DashboardWhereInput = {
  customerMetrics?: JsonFilter;
  expenses?: FloatNullableFilter;
  id?: StringFilter;
  profitMargins?: FloatNullableFilter;
  sales?: FloatNullableFilter;
};
