import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ToolTrackingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="employeeId" source="employeeId" />
        <TextInput label="storeId" source="storeId" />
        <TextInput label="toolName" source="toolName" />
      </SimpleForm>
    </Edit>
  );
};
