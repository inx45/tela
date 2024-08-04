import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const DashboardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerMetrics" source="customerMetrics" />
        <TextField label="expenses" source="expenses" />
        <TextField label="ID" source="id" />
        <TextField label="profitMargins" source="profitMargins" />
        <TextField label="sales" source="sales" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
