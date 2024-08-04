import { CrossBorderPaymentsWhereInput } from "./CrossBorderPaymentsWhereInput";
import { CrossBorderPaymentsOrderByInput } from "./CrossBorderPaymentsOrderByInput";

export type CrossBorderPaymentsFindManyArgs = {
  where?: CrossBorderPaymentsWhereInput;
  orderBy?: Array<CrossBorderPaymentsOrderByInput>;
  skip?: number;
  take?: number;
};
