import {resourceGroupName} from "./resource-group";
import * as pulumi from "@pulumi/pulumi";
import * as keyVault from "@pulumi/azure-native/keyvault";
import * as azuread from "@pulumi/azuread";

const currentUser = azuread.getClientConfig();
const stack = pulumi.getStack();

const keyVaultResource = new keyVault.Vault("key-vault", {
    vaultName: pulumi.interpolate`demo-app-key-vault-${stack}`,
    resourceGroupName: resourceGroupName,
    properties: {
        sku: {
            family: "A",
            name: "standard"
        },
        tenantId: currentUser.then(user => user.tenantId),
        enableRbacAuthorization: true,
        enabledForTemplateDeployment: true,
        enableSoftDelete: false
    }
});

export const keyVaultID = keyVaultResource.id;
export const keyVaultName = keyVaultResource.name;