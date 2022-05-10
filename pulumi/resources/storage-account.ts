import {resourceGroupName} from "./resource-group";
import * as storage from "@pulumi/azure-native/storage";
import * as pulumi from "@pulumi/pulumi";

const stack = pulumi.getStack();

const storageAccount = new storage.StorageAccount("storage-account", {
    accountName: pulumi.interpolate`demoappstorage0${stack}`,
    resourceGroupName: resourceGroupName,
    sku: {
        name: storage.SkuName.Standard_LRS,
    },
    kind: storage.Kind.StorageV2,
});

export const storageAccountName = storageAccount.name;