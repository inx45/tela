import * as graphql from "@nestjs/graphql";
import { ToolTrackingResolverBase } from "./base/toolTracking.resolver.base";
import { ToolTracking } from "./base/ToolTracking";
import { ToolTrackingService } from "./toolTracking.service";

@graphql.Resolver(() => ToolTracking)
export class ToolTrackingResolver extends ToolTrackingResolverBase {
  constructor(protected readonly service: ToolTrackingService) {
    super(service);
  }
}
