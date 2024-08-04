import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DashboardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Dashboards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerMetrics" source="customerMetrics" />
        <TextField label="expenses" source="expenses" />
        <TextField label="ID" source="id" />
        <TextField label="profitMargins" source="profitMargins" />
        <TextField label="sales" source="sales" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
