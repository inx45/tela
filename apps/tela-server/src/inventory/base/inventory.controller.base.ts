/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InventoryService } from "../inventory.service";
import { InventoryCreateInput } from "./InventoryCreateInput";
import { Inventory } from "./Inventory";
import { InventoryFindManyArgs } from "./InventoryFindManyArgs";
import { InventoryWhereUniqueInput } from "./InventoryWhereUniqueInput";
import { InventoryUpdateInput } from "./InventoryUpdateInput";

export class InventoryControllerBase {
  constructor(protected readonly service: InventoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Inventory })
  async createInventory(
    @common.Body() data: InventoryCreateInput
  ): Promise<Inventory> {
    return await this.service.createInventory({
      data: data,
      select: {
        alertLevel: true,
        createdAt: true,
        id: true,
        productName: true,
        quantity: true,
        reorderLevel: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Inventory] })
  @ApiNestedQuery(InventoryFindManyArgs)
  async inventories(@common.Req() request: Request): Promise<Inventory[]> {
    const args = plainToClass(InventoryFindManyArgs, request.query);
    return this.service.inventories({
      ...args,
      select: {
        alertLevel: true,
        createdAt: true,
        id: true,
        productName: true,
        quantity: true,
        reorderLevel: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async inventory(
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Inventory | null> {
    const result = await this.service.inventory({
      where: params,
      select: {
        alertLevel: true,
        createdAt: true,
        id: true,
        productName: true,
        quantity: true,
        reorderLevel: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInventory(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() data: InventoryUpdateInput
  ): Promise<Inventory | null> {
    try {
      return await this.service.updateInventory({
        where: params,
        data: data,
        select: {
          alertLevel: true,
          createdAt: true,
          id: true,
          productName: true,
          quantity: true,
          reorderLevel: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInventory(
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Inventory | null> {
    try {
      return await this.service.deleteInventory({
        where: params,
        select: {
          alertLevel: true,
          createdAt: true,
          id: true,
          productName: true,
          quantity: true,
          reorderLevel: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
