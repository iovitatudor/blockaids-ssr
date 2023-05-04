<template>
  <v-row class="text-center">
    <v-col class="buttons-wrapper">
      <crossmint-pay-button
        clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
        mintConfig='{"type":"erc-721","totalPrice":"10","_quantity":"1","quantity":"1"}'
        environment="staging"
        paymentMethod="ETH"
        class="xmint-btn"
      />

      <crossmint-pay-button
        clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
        mintConfig='{"type":"erc-721","totalPrice":"10","_quantity":"1","quantity":"1"}'
        environment="staging"
        paymentMethod="SOL"
        class="xmint-btn"
      />

      <crossmint-pay-button
        clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
        mintConfig='{"type":"erc-721","totalPrice":"10","_quantity":"1","quantity":"1"}'
        environment="staging"
        class="xmint-btn"
      />
    </v-col>
  </v-row>
</template>

<script>
import  CrossmintPayButton from "@crossmint/client-sdk-vanilla-ui";

export default {
  name: "Checkout",
  components: {CrossmintPayButton},
}
</script>

<style>
.buttons-wrapper {
  padding-left: 40px;
}
.xmint-btn::part(button) {
  /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);*/
  margin-bottom: 20px;
}

.xmint-btn::part(contentParagraph) {
  color: white;
  /*font-size: 1.25rem;*/
}
</style>
