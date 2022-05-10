import {keyVaultID} from "./key-vault";
import * as azuread from "@pulumi/azuread";
import * as authorization from "@pulumi/azure-native/authorization";

const currentUser = azuread.getClientConfig();

// Assign Key Vault Secret Officer role
const adminRoleAssignment = new authorization.RoleAssignment("admin-role", {
    principalId: currentUser.then(user => user.objectId),
    principalType: authorization.PrincipalType.User,
    roleDefinitionId: "/providers/Microsoft.Authorization/roleDefinitions/b86a8fe4-44ce-4948-aee5-eccb2c155cd7",
    roleAssignmentName: "b86a8fe4-44ce-4948-aee5-eccb2c155cd7",
    scope: keyVaultID
});