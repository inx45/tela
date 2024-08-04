import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const CrossBorderPaymentsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="conversionRate" source="conversionRate" />
        <TextInput label="currency" source="currency" />
        <TextInput label="paymentGateway" source="paymentGateway" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="transactionAmount" source="transactionAmount" />
      </SimpleForm>
    </Edit>
  );
};
