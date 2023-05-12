<template>
  <div class="buttons-area">
    <v-col class="buttons-wrapper">
      <no-ssr>
        <crossmint-pay-button
          clientId="3bb175c4-97f6-46a7-a47b-aca37029590e"
          mintConfig='{"type":"erc-721","totalPrice":"0.001","_quantity":"1","quantity":"1"}'
          environment="staging"
          paymentMethod="ETH"
          class="xmint-btn"
        />

        <crossmint-pay-button
          clientId="3bb175c4-97f6-46a7-a47b-aca37029590e"
          mintConfig='{"type":"erc-721","totalPrice":"0.001","_quantity":"1","quantity":"1"}'
          environment="staging"
          paymentMethod="SOL"
          class="xmint-btn"
        />

        <crossmint-pay-button
          clientId="3bb175c4-97f6-46a7-a47b-aca37029590e"
          mintConfig='{"type":"erc-721","totalPrice":"0.10","_quantity":"1","quantity":"1"}'
          environment="staging"
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
}
</script>

<style>

.buttons-area {
  position: absolute;
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
}
</style>
