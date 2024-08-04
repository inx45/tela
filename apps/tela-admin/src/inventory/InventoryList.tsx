import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InventoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Inventories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="alertLevel" source="alertLevel" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="productName" source="productName" />
        <TextField label="quantity" source="quantity" />
        <TextField label="reorderLevel" source="reorderLevel" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
