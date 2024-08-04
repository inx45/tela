import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  clientId?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
