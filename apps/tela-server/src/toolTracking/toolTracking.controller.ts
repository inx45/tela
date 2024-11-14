import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ToolTrackingService } from "./toolTracking.service";
import { ToolTrackingControllerBase } from "./base/toolTracking.controller.base";

@swagger.ApiTags("toolTrackings")
@common.Controller("toolTrackings")
export class ToolTrackingController extends ToolTrackingControllerBase {
  constructor(protected readonly service: ToolTrackingService) {
    super(service);
  }
}
