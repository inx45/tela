import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="category" source="category" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
