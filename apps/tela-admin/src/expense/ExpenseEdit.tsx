import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ExpenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="category" source="category" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
