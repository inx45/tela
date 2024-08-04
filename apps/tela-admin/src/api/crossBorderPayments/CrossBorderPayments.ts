export type CrossBorderPayments = {
  conversionRate: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  paymentGateway: string | null;
  status?: "Option1" | null;
  transactionAmount: number | null;
  updatedAt: Date;
};
