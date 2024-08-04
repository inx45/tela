import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrossBorderPaymentsServiceBase } from "./base/crossBorderPayments.service.base";

@Injectable()
export class CrossBorderPaymentsService extends CrossBorderPaymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
