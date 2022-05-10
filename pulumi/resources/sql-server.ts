import {resourceGroupName} from "./resource-group";
import * as sql from "@pulumi/azure-native/sql";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const dbUser = config.require("dbUser");
const dbPassword = config.requireSecret("dbPassword");
const stack = pulumi.getStack();

const sqlServer = new sql.Server("sql-server", {
    administratorLogin: dbUser,
    administratorLoginPassword: dbPassword,
    resourceGroupName: resourceGroupName,
    serverName: pulumi.interpolate`demo-app-sql-server-${stack}`,
    publicNetworkAccess: sql.ServerPublicNetworkAccess.Enabled
});

export const sqlServerName = sqlServer.name;