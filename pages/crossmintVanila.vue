<template>
  <div>
    <crossmint-pay-button
      clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
      mintConfig='{"type":"erc-721","totalPrice":"10","_quantity":"1","quantity":"1"}'
      environment="staging"
      paymentMethod="ETH"
    />

    <crossmint-pay-button
      clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
      mintConfig='{"type":"erc-721","totalPrice":"10","_quantity":"1","quantity":"1"}'
      environment="staging"
      paymentMethod="SOL"
    />

    <crossmint-pay-button
      clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
      mintConfig='{"type":"erc-721","totalPrice":"10","_quantity":"1","quantity":"1"}'
      environment="staging"
    />
  </div>
</template>

<script>
import  CrossmintPayButton from "@crossmint/client-sdk-vanilla-ui";

export default {
  name: "crossmintVanila",
  components: {CrossmintPayButton},
}
</script>

<style>
button.xmint-btn span {
  display: none;
}
button {
  content: "Custom Buy Text";
  color: red !important;
}
</style>
