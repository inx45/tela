import { Module } from "@nestjs/common";
import { AnalyticsModule } from "./analytics/analytics.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ToolTrackingModule } from "./toolTracking/toolTracking.module";
import { ExpenseModule } from "./expense/expense.module";
import { CustomerModule } from "./customer/customer.module";
import { InventoryModule } from "./inventory/inventory.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { CrossBorderPaymentsModule } from "./crossBorderPayments/crossBorderPayments.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AnalyticsModule,
    DashboardModule,
    ToolTrackingModule,
    ExpenseModule,
    CustomerModule,
    InventoryModule,
    InvoiceModule,
    CrossBorderPaymentsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
