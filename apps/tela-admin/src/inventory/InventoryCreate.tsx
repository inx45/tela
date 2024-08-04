import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InventoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="alertLevel" source="alertLevel" />
        <TextInput label="productName" source="productName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput step={1} label="reorderLevel" source="reorderLevel" />
      </SimpleForm>
    </Create>
  );
};
