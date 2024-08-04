import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AnalyticsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerBehaviorData" source="customerBehaviorData" />
        <TextField label="financialHealthData" source="financialHealthData" />
        <TextField label="ID" source="id" />
        <TextField label="inventoryData" source="inventoryData" />
        <TextField label="salesData" source="salesData" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
