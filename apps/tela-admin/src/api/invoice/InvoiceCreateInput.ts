export type InvoiceCreateInput = {
  amount?: number | null;
  clientId?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
};
