import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const DashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput label="expenses" source="expenses" />
        <NumberInput label="profitMargins" source="profitMargins" />
        <NumberInput label="sales" source="sales" />
      </SimpleForm>
    </Edit>
  );
};
