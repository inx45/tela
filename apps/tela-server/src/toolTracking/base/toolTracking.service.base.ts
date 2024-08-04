/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ToolTracking as PrismaToolTracking } from "@prisma/client";

export class ToolTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ToolTrackingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.toolTracking.count(args);
  }

  async toolTrackings(
    args: Prisma.ToolTrackingFindManyArgs
  ): Promise<PrismaToolTracking[]> {
    return this.prisma.toolTracking.findMany(args);
  }
  async toolTracking(
    args: Prisma.ToolTrackingFindUniqueArgs
  ): Promise<PrismaToolTracking | null> {
    return this.prisma.toolTracking.findUnique(args);
  }
  async createToolTracking(
    args: Prisma.ToolTrackingCreateArgs
  ): Promise<PrismaToolTracking> {
    return this.prisma.toolTracking.create(args);
  }
  async updateToolTracking(
    args: Prisma.ToolTrackingUpdateArgs
  ): Promise<PrismaToolTracking> {
    return this.prisma.toolTracking.update(args);
  }
  async deleteToolTracking(
    args: Prisma.ToolTrackingDeleteArgs
  ): Promise<PrismaToolTracking> {
    return this.prisma.toolTracking.delete(args);
  }
}
