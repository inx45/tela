import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ToolTrackingWhereInput = {
  employeeId?: StringNullableFilter;
  id?: StringFilter;
  storeId?: StringNullableFilter;
  toolName?: StringNullableFilter;
};
