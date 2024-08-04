import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CrossBorderPaymentsWhereInput = {
  conversionRate?: FloatNullableFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  paymentGateway?: StringNullableFilter;
  status?: "Option1";
  transactionAmount?: FloatNullableFilter;
};
