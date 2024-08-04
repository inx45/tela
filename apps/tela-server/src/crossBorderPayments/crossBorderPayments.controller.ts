import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrossBorderPaymentsService } from "./crossBorderPayments.service";
import { CrossBorderPaymentsControllerBase } from "./base/crossBorderPayments.controller.base";

@swagger.ApiTags("crossBorderPayments")
@common.Controller("crossBorderPayments")
export class CrossBorderPaymentsController extends CrossBorderPaymentsControllerBase {
  constructor(protected readonly service: CrossBorderPaymentsService) {
    super(service);
  }
}
