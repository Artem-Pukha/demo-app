import {resourceGroupName} from "./resource-group";
import {appServicePlanId} from "./app-service-plan";
import {keyVaultName} from "./key-vault";
import {dbPasswordSecretName} from "./db-secret";
import {sqlServerName} from "./sql-server";
import {databaseName} from "./database";
import * as web from "@pulumi/azure-native/web";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();

const dbUser = config.require("dbUser");
const stack = pulumi.getStack();

const appService = new web.WebApp("web-app", {
    resourceGroupName: resourceGroupName,
    serverFarmId: appServicePlanId,
    name: pulumi.interpolate`demo-app-service-${stack}`,
    identity: {
        type: web.ManagedServiceIdentityType.SystemAssigned
    },
    siteConfig: {
        appSettings: [
            {
                name: "DB_USERNAME",
                value: dbUser
            },
            {
                name: "DB_PASSWORD",
                value: pulumi.interpolate`@Microsoft.KeyVault(VaultName=${keyVaultName};SecretName=${dbPasswordSecretName})`
            }
        ],
        connectionStrings: [{
            name: "DB_URL",
            type: web.ConnectionStringType.SQLAzure,
            connectionString: pulumi.all([sqlServerName, databaseName])
                .apply(([server, db]) => 
                    pulumi.interpolate`jdbc:sqlserver://${server}.database.windows.net:1433;
                    database=${db};user=${dbUser};encrypt=true;trustServerCertificate=false;
                    hostNameInCertificate=*.database.windows.net;loginTimeout=30;`)
        }],
        alwaysOn: true,
        linuxFxVersion: "JAVA|8-jre8",
        appCommandLine: "java -jar /home/site/wwwroot/app.jar"
    },
    httpsOnly: true
});

export const managedIdentityServicePrincipalID = appService.identity
    .apply(servicePrinciple => servicePrinciple?.principalId) as pulumi.Input<string>;