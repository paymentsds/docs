---
id: doc4
title: Python
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

```python
from paymentsds.mpesa import Client

client = Client(
   api_key='<REPLACE>',              # API Key
   public_key='<REPLACE>',           # Public Key
   service_provider_code='<REPLACE>' # input_ServiceProviderCode
)

try:
   payment_data = {
      'from': '841234567',       # input_CustomerMSISDN
      'reference': '11114',      # input_ThirdPartyReference
      'transaction': 'T12344CC', # input_TransactionReference
      'amount': '10'             # input_Amount
   }

   result = client.receive(payment_data)
except:
   print('Operation failed')

```

### Send money from a business account to a mobile account

```python
from paymentsds.mpesa import Client

client = Client(
   api_key='<REPLACE>',              # API Key
   public_key='<REPLACE>',           # Public Key
   service_provider_code='<REPLACE>' # input_ServiceProviderCode
)

try:
   payment_data = {
      'to': '841234567',         # input_CustomerMSISDN
      'reference': '11114',      # input_ThirdPartyReference
      'transaction': 'T12344CC', # input_TransactionReference
      'amount': '10'             # input_Amount
   }

   result = client.send(payment_data)
except:
   print('Operation failed')

```

### Send money from a business account to a another business account

```python
from paymentsds.mpesa import Client

client = Client(
   api_key='<REPLACE>',              # API Key
   public_key='<REPLACE>',           # Public Key
   service_provider_code='<REPLACE>' # input_ServiceProviderCode
)

try:
   payment_data = {
      'to': '979797',            # input_ReceiverPartyCode
      'reference': '11114',      # input_ThirdPartyReference
      'transaction': 'T12344CC', # input_TransactionReference
      'amount': '10'             # input_Amount
   }

   result = client.send(payment_data)
except:
   print('Operation failed')

```

### Revert a transaction

### Query the status of a transaction
