import { resourceGroupName } from "./resource-group";
import { sqlServerName } from "./sql-server";
import * as sql from "@pulumi/azure-native/sql";
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();

const database = new sql.Database("sql-database", {
    databaseName: pulumi.interpolate`demo-app-database-${stack}`,
    serverName: sqlServerName,
    resourceGroupName: resourceGroupName,
    createMode: "Default",
    collation: "SQL_Latin1_General_CP1_CI_AS",
    sku: {
        name: "Free",
        tier: "Free"
    }
});

export const databaseName = database.name;