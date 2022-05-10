import * as keyVault from "@pulumi/azure-native/keyvault";
import { keyVaultName } from "./key-vault";
import {resourceGroupName} from "./resource-group";
import * as pulumi from "@pulumi/pulumi";

const dbPassword = new pulumi.Config().requireSecret("dbPassword");

const dbPasswordSecret = new keyVault.Secret("db-password-secret", {
    properties: {
        value: dbPassword
    },
    resourceGroupName: resourceGroupName,
    secretName: "db-password",
    vaultName: keyVaultName
})

export const dbPasswordSecretName = dbPasswordSecret.name;