<template>
  <v-row class="text-center donate-area">
    <v-col class="buttons-wrapper">
      <crossmint-pay-button
        clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
        mintConfig='{"type":"erc-721","totalPrice":"0.1","_quantity":"1","quantity":"1"}'
        environment="staging"
        paymentMethod="ETH"
        class="xmint-btn xmint-btn-eth"
      />

      <crossmint-pay-button
        clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
        mintConfig='{"type":"erc-721","totalPrice":"0.1","_quantity":"1","quantity":"1"}'
        environment="staging"
        paymentMethod="SOL"
        class="xmint-btn xmint-btn-sol"
      />

      <crossmint-pay-button
        clientId="735125ed-e846-4111-adfa-8f9cad54a5c9"
        mintConfig='{"type":"erc-721","totalPrice":"1","_quantity":"1","quantity":"1"}'
        environment="staging"
        class="xmint-btn xmint-btn-card"
      />
    </v-col>
  </v-row>
</template>

<script>
import CrossmintPayButton from "@crossmint/client-sdk-vanilla-ui";

export default {
  name: "Checkout",
  components: {CrossmintPayButton},
  mounted() {

  }
}
</script>

<style lang="scss">
/*.buttons-wrapper {*/
/*  padding-left: 40px;*/
/*}*/
.donate-area {
  .xmint-btn {
    display: flex;
    justify-content: center;
  }
  .xmint-btn::part(contentParagraph) {
    color: transparent;
    position: relative;
    width: 145px;
  }

  .xmint-btn::part(contentParagraph):after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0;
    color: #FFF;
  }

  .xmint-btn-eth::part(contentParagraph):after {
    content: "Donate 1 ETH";
  }

  .xmint-btn-sol::part(contentParagraph):after {
    content: "Donate 1 SOL";
  }

  .xmint-btn-card::part(contentParagraph):after {
    content: "Donate 10$";
  }

  .xmint-btn {
    position: relative;
  }

  /*.xmint-btn:after {*/
  /*  content: "Custom Buy Text";*/
  /*  border: 1px solid red;*/
  /*  position: absolute;*/
  /*  left: -500px;*/
  /*  top: 0;*/
  /*}*/

  .xmint-btn::part(button) {
    /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);*/
    margin-bottom: 30px;
  }

  /*.xmint-btn::part(contentParagraph) {*/
  /*  color: white;*/
  /*  !*font-size: 1.25rem;*!*/
  /*}*/
  .xmint-btn span {
    display: none;
  }

  //.xmint-btn:after {
  //  content: "Custom Buy Text";
  //  color: white;
  //}
}
</style>
