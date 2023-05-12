<template>
  <div>
    <div class="checkout-area">
      <h3 class="text-center">Checkout</h3>
      <v-container class="checkout-area-inside">
        <v-row>
          <v-col md="5">
            <v-img src="/images/collections/WAD22%20Poster%20A3_11.jpg" width="100%"></v-img>
          </v-col>
          <v-col md="1"></v-col>
          <v-col md="5" class="checkout-details">
            <div>
              <h4>People Before Profits: Share Medical Tech</h4>
              <p class="collection">Green Collection</p>
              <p class="price">$120</p>
            </div>
            <div>
              <Checkout/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <PartnersComponent/>
  </div>

</template>

<script>
import Checkout from "../components/Checkout";
import PartnersComponent from "../components/PartnersComponent";

export default {
  name: "checkout",
  components: {Checkout, PartnersComponent},
  data() {
    return {
      // items: [1, 2, 3, 4],
    }
  },
}
</script>

<style lang="scss">
.checkout-area {
  padding-top: 80px;;
  background-color: #f3fbfb;
  padding-bottom: 104px;

  h3 {
    margin-bottom: 51px;
    font-size: 40px;
  }

  .checkout-area-inside {
    position: relative;
    background-color: #FFF;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);

    .v-image {
      border: 1px solid #58CAC0;
      border-radius: 16px;
    }

    h4 {
      font-size: 40px;
      line-height: 1.3;
    }

    .collection {
      margin-top: 16px;
      color: #666666;
      font-size: 24px;
    }

    .price {
      font-size: 24px;
      margin-top: 16px;
    }

    .checkout-details {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
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
@media only screen and (max-width: 600px) {
  .checkout-area {
    padding-top: 20px;;
    background-color: #f3fbfb;
    padding-bottom: 20px;

    h3 {
      margin-bottom: 15px;
      font-size: 24px;
    }

    .checkout-area-inside {
      position: relative;
      background-color: #FFF;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);

      .row {
        display: block;
      }

      .v-image {
        border: 1px solid #58CAC0;
        border-radius: 16px;
        width: 100% !important;
      }

      h4 {
        font-size: 24px;
        line-height: 1.3;
      }

      .collection {
        margin-top: 16px;
        color: #666666;
        font-size: 18px;
      }

      .price {
        font-size: 24px;
        margin-top: 16px;
      }

      .checkout-details {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
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
}
</style>
