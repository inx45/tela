import { SortOrder } from "../../util/SortOrder";

export type CrossBorderPaymentsOrderByInput = {
  conversionRate?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  paymentGateway?: SortOrder;
  status?: SortOrder;
  transactionAmount?: SortOrder;
  updatedAt?: SortOrder;
};
