<template>
  <v-row class="checkout-area">
    <v-col md="12">
      <h3 class="text-center">NFT Checkout page</h3>
    </v-col>
    <v-col md="6" class="left-area">
      <img src="/images/collections/WAD22%20Poster%20A3_11.jpg" alt="">
      <h4>About the collection</h4>
      <p>Contract Address: <i>0xf66cEb3148f573CcCCf28246F2Eb2AA9178C1668</i></p>
    </v-col>
    <v-col md="6" class="right-area">
      <h4>
        <p>Chain: Polygon</p>
        <p>0.10 USD</p>
      </h4>
      <h5>
        <p>Cyberpunk</p>
        <p>0.0000 SOL</p>
      </h5>
      <div class="information">
        <p>This is a test collection</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis culpa delectus dolorem eius
          eos, et facere fugiat maxime natus non nulla perferendis provident quam repellat sapiente tempora vel
          voluptatibus!
        </p>
      </div>

      <div>
        <Checkout/>
<!--        <v-select-->
<!--          :items="items"-->
<!--          label="Quantity"-->
<!--          density="Quantity"-->
<!--        ></v-select>-->
<!--        <v-btn block>Buy with credit card</v-btn>-->
<!--        <br>-->
<!--        <v-btn block>Buy with credit ETH</v-btn>-->
<!--        <br>-->
<!--        <v-btn block>Buy with credit SOL</v-btn>-->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Checkout from "../components/Checkout";

export default {
  name: "checkout",
  components: {Checkout},
  data() {
    return {
      items: [1, 2, 3, 4],
    }
  },
}
</script>

<style lang="scss" scoped>
.checkout-area {
  h3 {
    font-size: 2.5em;
  }

  .left-area {
    img {
      width: 100%;
    }
  }

  .right-area {
    h4 {
      font-size: 2em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h5 {
      font-size: 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .information {
      margin: 2em;
    }
  }
}
</style>
