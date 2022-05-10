import * as pulumi from "@pulumi/pulumi";
import * as resource from "@pulumi/azure-native/resources";

const envResourceGroupName = new pulumi.Config().require("resourceGroupName");

const resourceGroup = new resource.ResourceGroup("resource-group", {
    resourceGroupName: envResourceGroupName
});

export const resourceGroupName = resourceGroup.name;