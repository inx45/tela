import { Module } from "@nestjs/common";
import { ToolTrackingModuleBase } from "./base/toolTracking.module.base";
import { ToolTrackingService } from "./toolTracking.service";
import { ToolTrackingController } from "./toolTracking.controller";
import { ToolTrackingResolver } from "./toolTracking.resolver";

@Module({
  imports: [ToolTrackingModuleBase],
  controllers: [ToolTrackingController],
  providers: [ToolTrackingService, ToolTrackingResolver],
  exports: [ToolTrackingService],
})
export class ToolTrackingModule {}
