import { Module } from "@nestjs/common";
import { CrossBorderPaymentsModuleBase } from "./base/crossBorderPayments.module.base";
import { CrossBorderPaymentsService } from "./crossBorderPayments.service";
import { CrossBorderPaymentsController } from "./crossBorderPayments.controller";
import { CrossBorderPaymentsResolver } from "./crossBorderPayments.resolver";

@Module({
  imports: [CrossBorderPaymentsModuleBase],
  controllers: [CrossBorderPaymentsController],
  providers: [CrossBorderPaymentsService, CrossBorderPaymentsResolver],
  exports: [CrossBorderPaymentsService],
})
export class CrossBorderPaymentsModule {}
