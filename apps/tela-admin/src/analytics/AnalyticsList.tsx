import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AnalyticsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalyticsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerBehaviorData" source="customerBehaviorData" />
        <TextField label="financialHealthData" source="financialHealthData" />
        <TextField label="ID" source="id" />
        <TextField label="inventoryData" source="inventoryData" />
        <TextField label="salesData" source="salesData" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
