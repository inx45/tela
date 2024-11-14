import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  alertLevel?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  quantity?: SortOrder;
  reorderLevel?: SortOrder;
  updatedAt?: SortOrder;
};
