---
id: usage
title: Ruby Usage
sidebar_label: Usage
---

### Prerequisites

To use PaymentsDS with the Ruby SDK you need to have:

- [Ruby 2.5+](https://www.ruby-lang.org)
- [RubyGems](https://rubygems.org)
- [Bundler](https://bundler.io)

### Receive money from a mobile account to a business account

```ruby
require 'paymentsds/mpesa'

client = Paymentsds::MPesa::Client.new do |config|
   config.api_key = '<REPLACE>'               # API Key
   config.public_key = '<REPLACE>'            # Public Key
   config.service_provider_code = '<REPLACE>' # input_ServiceProviderCode
end

begin
   payment_data = {
      from: '841234567',       # input_CustomerMSISDN
      reference: '11114',      # input_ThirdPartyReference
      transaction: 'T12344CC', # input_TransactionReference
      amount: '10'             # input_Amount
   }

   result = client.receive(payment_data)

   if result.success?
      puts result.data
   end
rescue
   puts 'Operation failed'
end
```

### Send money from a business account to a mobile account

```ruby
require 'paymentsds/mpesa'

client = Paymentsds::MPesa::Client.new do |config|
   config.api_key = '<REPLACE>'               # API Key
   config.public_key = '<REPLACE>'            # Public Key
   config.service_provider_code = '<REPLACE>' # input_ServiceProviderCode
end

begin
   payment_data = {
      to: '841234567',       # input_CustomerMSISDN
      reference: '11114',      # input_ThirdPartyReference
      transaction: 'T12344CC', # input_TransactionReference
      amount: '10'             # input_Amount
   }

   result = client.send(payment_data)

   if result.success?
      puts result.data
   end
rescue
   puts 'Operation failed'
end
```

### Send money from a business account to a another business account

```ruby
require 'paymentsds/mpesa'

client = Paymentsds::MPesa::Client.new do |config|
   config.api_key = '<REPLACE>'               # API Key
   config.public_key = '<REPLACE>'            # Public Key
   config.service_provider_code = '<REPLACE>' # input_ServiceProviderCode
end

begin
   payment_data = {
      to: '979797',            # input_ReceiverPartyCode
      reference: '11114',      # input_ThirdPartyReference
      transaction: 'T12344CC', # input_TransactionReference
      amount: '10'             # input_Amount
   }

   result = client.send(payment_data)

   if result.success?
      puts result.data
   end
rescue
   puts 'Operation failed'
end
```

### Revert a transaction

```ruby
require 'paymentsds/mpesa'

client = Paymentsds::MPesa::Client.new do |config|
   config.api_key = '<REPLACE>'               # API Key
   config.public_key = '<REPLACE>'            # Public Key
   config.service_provider_code = '<REPLACE>' # input_ServiceProviderCode
   config.initiator_identifier = '<REPLACE>'  # input_InitiatorIdentifier,
   config.security_identifier = '<REPLACE>'   # input_SecurityCredential
end

begin
   reversion_data = {
      reference: '11114',      # input_ThirdPartyReference
      transaction: 'T12344CC', # input_TransactionReference
      amount: '10'             # input_ReversalAmounts
   }

   result = client.reversion(payment_data)

   if result.success?
      # Handle success scenario
   end
rescue
   # Handle failure scenario
end
```

### Query the status of a transaction
