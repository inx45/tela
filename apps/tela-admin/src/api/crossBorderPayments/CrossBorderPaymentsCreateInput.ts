export type CrossBorderPaymentsCreateInput = {
  conversionRate?: number | null;
  currency?: string | null;
  paymentGateway?: string | null;
  status?: "Option1" | null;
  transactionAmount?: number | null;
};
