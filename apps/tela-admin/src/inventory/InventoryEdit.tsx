import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InventoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="alertLevel" source="alertLevel" />
        <TextInput label="productName" source="productName" />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput step={1} label="reorderLevel" source="reorderLevel" />
      </SimpleForm>
    </Edit>
  );
};
