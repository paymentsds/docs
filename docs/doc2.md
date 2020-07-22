---
id: doc2
title: JavaScript
---

## Prerequisites

## Features

- Receive money from a mobile account to a business account
- Send money from a business account to a mobile account
- Send money from a business account to a another business account
- Revert a transaction
- Query the status of a transaction

## Usage

### Receive money from a mobile account to a business account

```javascript
import { Client } from "@paymentsds/mpesa";

const client = new Client({
  apiKey: "<REPLACE>", // API Key
  publicKey: "<REPLACE>", // Public Key
  serviceProviderCode: "<REPLACE>", // input_ServiceProviderCode
});

const paymentData = {
  from: "841234567", // input_CustomerMSISDN
  reference: "11114", // input_ThirdPartyReference
  transation: "T12344CC", // input_TransactionReference
  amount: "10", // input_Amount
};

client
  .receive(paymentData)
  .then((r) => {
    console.log(r.data);
  })
  .catch((e) => {
    console.log(e);
  });
```

### Send money from a business account to a mobile account

```javascript
import { Client } from "@paymentsds/mpesa";

const client = new Client({
  apiKey: "<REPLACE>", // API Key
  publicKey: "<REPLACE>", // Public Key
  serviceProviderCode: "<REPLACE>", // input_ServiceProviderCode
});

const paymentData = {
  to: "841234567", // input_CustomerMSISDN
  reference: "11114", // input_ThirdPartyReference
  transation: "T12344CC", // input_TransactionReference
  amount: "10", // input_Amount
};

client
  .send(paymentData)
  .then((r) => {
    console.log(r.data);
  })
  .catch((e) => {
    console.log(e);
  });
```

### Send money from a business account to a another business account

```javascript
import { Client } from "@paymentsds/mpesa";

const client = new Client({
  apiKey: "<REPLACE>", // API Key
  publicKey: "<REPLACE>", // Public Key
  serviceProviderCode: "<REPLACE>", // input_ServiceProviderCode
});

const paymentData = {
  to: "979797", // input_ReceiverPartyCode
  reference: "11114", // input_ThirdPartyReference
  transation: "T12344CC", // input_TransactionReference
  amount: "10", // input_Amount
};

client
  .send(paymentData)
  .then((r) => {
    console.log(r.data);
  })
  .catch((e) => {
    console.log(e);
  });
```

### Revert a transaction

### Query the status of a transaction
