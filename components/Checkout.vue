<template>
  <div class="buttons-area">
    <v-col class="buttons-wrapper">
      <no-ssr>
        <crossmint-pay-button
          :clientId="collection.client_id"
          mintConfig='{"type":"erc-721","totalPrice":"0.2","_quantity":"1","quantity":"1"}'
          environment="production"
          paymentMethod="ETH"
          class="xmint-btn"
        />

        <crossmint-pay-button
          :clientId="collection.client_id"
          mintConfig='{"type":"erc-721","totalPrice":"0.2","_quantity":"1","quantity":"1"}'
          environment="production"
          paymentMethod="SOL"
          class="xmint-btn"
        />

        <crossmint-pay-button
          :clientId="collection.client_id"
          mintConfig='{"type":"erc-721","totalPrice":"0.2","_quantity":"1","quantity":"1"}'
          environment="production"
          class="xmint-btn"
        />
      </no-ssr>
    </v-col>
  </div>
</template>

<script>
import CrossmintPayButton from "@crossmint/client-sdk-vanilla-ui";

export default {
  name: "Checkout",
  components: {CrossmintPayButton},
  props: {collection: {type: Object}},
}
</script>

<style>

.buttons-area {
  position: absolute;
  bottom: 0;
  margin-left: -10px;
}

.xmint-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-right: 6px;
}

.xmint-btn::part(contentParagraph) {
  /*width: 200px;*/
}

.buttons-wrapper {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .buttons-area {
    position: relative;
    bottom: 0;
  }

  .xmint-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .xmint-btn::part(contentParagraph) {
    width: 200px;
  }

  .buttons-wrapper {
    padding: 0;
  }

  .buttons-area {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons-wrapper {
    display: block;
  }

  .xmint-btn::part(contentParagraph) {
    width: 280px;
  }

  .xmint-btn {
    display: block;
    justify-content: center;
    margin-bottom: 20px;
    margin-right: 6px;
  }
}
</style>
