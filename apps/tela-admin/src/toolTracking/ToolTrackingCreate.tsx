import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ToolTrackingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="employeeId" source="employeeId" />
        <TextInput label="storeId" source="storeId" />
        <TextInput label="toolName" source="toolName" />
      </SimpleForm>
    </Create>
  );
};
