import * as graphql from "@nestjs/graphql";
import { CrossBorderPaymentsResolverBase } from "./base/crossBorderPayments.resolver.base";
import { CrossBorderPayments } from "./base/CrossBorderPayments";
import { CrossBorderPaymentsService } from "./crossBorderPayments.service";

@graphql.Resolver(() => CrossBorderPayments)
export class CrossBorderPaymentsResolver extends CrossBorderPaymentsResolverBase {
  constructor(protected readonly service: CrossBorderPaymentsService) {
    super(service);
  }
}
