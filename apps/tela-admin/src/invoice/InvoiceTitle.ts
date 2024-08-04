import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "clientId";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.clientId?.toString() || String(record.id);
};
