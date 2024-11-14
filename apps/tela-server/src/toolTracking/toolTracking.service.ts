import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ToolTrackingServiceBase } from "./base/toolTracking.service.base";

@Injectable()
export class ToolTrackingService extends ToolTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
