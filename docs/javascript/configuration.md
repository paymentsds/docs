---
id: configuration
title: JavaScript Configuration
sidebar_label: Configuration
---

The examples below show you how you can configure the PaymentsDS JavaScript SDK

```javascript
import { Client } from "@paymentsds/mpesa";

const client = new Client({
  apiKey: "<REPLACE>", // API Key
  publicKey: "<REPLACE>", // Public Key
  serviceProviderCode: "<REPLACE>", // input_ServiceProviderCode,
  initiatorIdentifier: "<REPLACE>", // input_InitiatorIdentifier,
  securityIdentifier: "<REPLACE>", // input_SecurityCredential
  timeout: "<REPLACE>", // time in seconds
  debugging: true,
  verifySSL: false,
  userAgent: "<REPLACE>",
});
```

```javascript
import { Client } from "@paymentsds/mpesa";

const client = new Client({
  accessToken: "<REPLACE>", // Precomputed access token
  serviceProviderCode: "<REPLACE>", // input_ServiceProviderCode,
  initiatorIdentifier: "<REPLACE>", // input_InitiatorIdentifier,
  securityIdentifier: "<REPLACE>", // input_SecurityCredential
  timeout: "<REPLACE>", // time in seconds
  debugging: true,
  verifySSL: false,
  userAgent: "<REPLACE>",
});
```
