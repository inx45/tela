import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InventoryWhereInput = {
  alertLevel?: IntNullableFilter;
  id?: StringFilter;
  productName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  reorderLevel?: IntNullableFilter;
};
