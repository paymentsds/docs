---
id: usage
title: PHP Usage
sidebar_label: Usage
---

### Prerequisites

To use PaymentsDS with the PHP SDK you need to have:

```

```

### Receive money from a mobile account to a business account

```php
use Paymentsds\MPesa\Client;

$client = new Client([
   'apiKey' => '<REPLACE>',             // API Key
   'publicKey' => '<REPLACE>',          // Public Key
   'serviceProviderCode' => '<REPLACE>' // input_ServiceProviderCode
]);

try {
   $paymentData = [
      'from' => '841234567',       // input_CustomerMSISDN
      'reference' => '11114',      // input_ThirdPartyReference
      'transaction' => 'T12344CC', // input_TransactionReference
      'amount' => '10'             // input_Amount
   ];

   $result = $client.receive($paymentData);

   if ($result.isSuccess()) {
      var_dump($result);
   }
} catch ($e) {
   var_dump($e);
}
```

### Send money from a business account to a mobile account

```php
use Paymentsds\MPesa\Client;

$client = new Client([
   'apiKey' => '<REPLACE>',             // API Key
   'publicKey' => '<REPLACE>',          // Public Key
   'serviceProviderCode' => '<REPLACE>' // input_ServiceProviderCode
]);

try {
   $paymentData = [
      'to' => '841234567',         // input_CustomerMSISDN
      'reference' => '11114',      // input_ThirdPartyReference
      'transaction' => 'T12344CC', // input_TransactionReference
      'amount' => '10'             // input_Amount
   ];

   $result = $client.send($paymentData);

   if ($result.isSuccess()) {
      var_dump($result);
   }
} catch ($e) {
   var_dump($e);
}
```

### Send money from a business account to a another business account

```php
use Paymentsds\MPesa\Client;

$client = new Client([
   'apiKey' => '<REPLACE>',             // API Key
   'publicKey' => '<REPLACE>',          // Public Key
   'serviceProviderCode' => '<REPLACE>' // input_ServiceProviderCode
]);

try {
   $paymentData = [
      'to' => '979797',         // input_ReceiverPartyCode
      'reference' => '11114',      // input_ThirdPartyReference
      'transaction' => 'T12344CC', // input_TransactionReference
      'amount' => '10'             // input_Amount
   ];

   $result = $client.send($paymentData);

   if ($result.isSuccess()) {
      var_dump($result);
   }
} catch ($e) {
   var_dump($e);
}
```

### Revert a transaction

### Query the status of a transaction
