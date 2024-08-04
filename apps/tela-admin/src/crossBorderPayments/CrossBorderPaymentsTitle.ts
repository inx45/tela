import { CrossBorderPayments as TCrossBorderPayments } from "../api/crossBorderPayments/CrossBorderPayments";

export const CROSSBORDERPAYMENTS_TITLE_FIELD = "currency";

export const CrossBorderPaymentsTitle = (
  record: TCrossBorderPayments
): string => {
  return record.currency?.toString() || String(record.id);
};
