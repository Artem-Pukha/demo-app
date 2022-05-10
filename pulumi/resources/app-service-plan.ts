import {resourceGroupName} from "./resource-group";
import * as web from "@pulumi/azure-native/web";
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();

const appServicePlan = new web.AppServicePlan("app-service-plan", {
    resourceGroupName: resourceGroupName,
    name: pulumi.interpolate`demo-app-service-plan-${stack}`,
    kind: "app,linux",
    reserved: true,
    sku: {
        name: "B1",
        tier: "Basic"
    }
});

export const appServicePlanId = appServicePlan.id;