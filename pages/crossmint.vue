<template>
  <div>
    <CrossmintPaymentElement
      clientId="_YOUR_CLIENT_ID_"
      environment="_ENVIRONMENT_"
      :recipient="{ email: '_USERS_EMAIL_ADDRESS_', wallet: '_USERS_WALLET_ADDRESS_' }"
      currency="_CURRENCY_"
      locale="_LANGUAGE_"
      paymentMethod="_PAYMENT_METHOD_"
      :ui-config="{
            colors: {
                background: '#000814',
                backgroundSecondary: '#001D3D',
                backgroundTertiary: '#EEEEEE',
                textPrimary: '#FFFFFF',
                textSecondary: '#EEEEEE',
                accent: '#FFC300',
                danger: '#FFC300',
                textLink: '#FFC300'
            },
                        fontSizeBase: '0.91rem',
            spacingUnit: '0.274rem',
            borderRadius: '4px',
            fontWeightPrimary: '400',
            fontWeightSecondary: '500'
        }"
      :mint-config="{
            type: 'erc-721',
            quantity: '_NUMBER_OF_NFTS_',
            totalPrice: '_PRICE_IN_NATIVE_TOKEN_',
            // your custom minting arguments...
        }"
      @event="onEvent"
    />
  </div>
</template>

<script>
import {CrossmintPaymentElement} from "@crossmint/client-sdk-vue-ui";

export default {
  components: {CrossmintPaymentElement},
  methods: {
    onEvent() {
      console.log('mvlfm');
    }
  }
}
</script>
