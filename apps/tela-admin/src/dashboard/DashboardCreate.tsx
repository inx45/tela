import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const DashboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="expenses" source="expenses" />
        <NumberInput label="profitMargins" source="profitMargins" />
        <NumberInput label="sales" source="sales" />
      </SimpleForm>
    </Create>
  );
};
