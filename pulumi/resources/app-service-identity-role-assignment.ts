import {keyVaultID} from "./key-vault";
import {managedIdentityServicePrincipalID} from "./app-service";
import * as authorization from "@pulumi/azure-native/authorization";


// Assign Key Vault Secret User role to app service instance
const roleAssignment = new authorization.RoleAssignment("key-vault-role-assignment", {
    principalId: managedIdentityServicePrincipalID,
    principalType: authorization.PrincipalType.ServicePrincipal,
    roleDefinitionId: "/providers/Microsoft.Authorization/roleDefinitions/4633458b-17de-408a-b874-0445c86b69e6",
    roleAssignmentName: "4633458b-17de-408a-b874-0445c86b69e6",
    scope: keyVaultID
})