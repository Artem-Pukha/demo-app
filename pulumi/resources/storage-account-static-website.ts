import {resourceGroupName} from "./resource-group";
import {storageAccountName} from "./storage-account";
import * as storage from "@pulumi/azure-native/storage";

const storageAccountStaticWebsite = new storage.StorageAccountStaticWebsite("static-web-site", {
    accountName: storageAccountName,
    resourceGroupName: resourceGroupName,
    indexDocument: "index.html",
    error404Document: "error.html"
})