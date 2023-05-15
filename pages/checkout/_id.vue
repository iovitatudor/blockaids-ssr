<template>
  <div>
    <div class="checkout-area">
      <h3 class="text-center">Checkout</h3>
      <v-container class="checkout-area-inside" v-if="ready">
        <v-row class="checkout-area-row">
          <v-col md="5">
            <v-img :src="collection.image_name" width="100%"></v-img>
          </v-col>
          <v-col md="1"></v-col>
          <v-col md="6" class="checkout-details">
            <div>
              <h4>{{ collection.name }}</h4>
              <p class="collection">{{ collection.description }}</p>
              <p class="price"> 5 USD </p>
            </div>
            <div class="checkout-area-wrapper">
              <Checkout :collection="collection"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <PartnersComponent/>
  </div>

</template>

<script>
import PartnersComponent from "../../components/PartnersComponent";
import Checkout from "../../components/Checkout";
import MultiColorColl from "../../api/multicolor-coll.json"
import BlueColl from "../../api/blue-coll.json"
import GreenColl from "../../api/green-coll.json"
import OrangeColl from "../../api/orange-coll.json"
import PinkColl from "../../api/pink-coll.json"
import RedColl from "../../api/red-coll.json"

export default {
  name: "checkout",
  components: {PartnersComponent, Checkout},
  data() {
    return {
      ready: false,
      collection: {},
      collections: [],
      multiColorCollection: [],
      greenCollection: [],
      blueCollection: [],
      orangeCollection: [],
      pinkCollection: [],
      redCollection: [],
    }
  },
  mounted() {
    try {
      this.multiColorCollection = MultiColorColl;
      this.greenCollection = GreenColl;
      this.blueCollection = BlueColl;
      this.orangeCollection = OrangeColl;
      this.pinkCollection = PinkColl;
      this.redCollection = RedColl;

      this.collections = [
        ...this.multiColorCollection,
        ...this.greenCollection,
        ...this.blueCollection,
        ...this.orangeCollection,
        ...this.pinkCollection,
        ...this.redCollection
      ];

      const collectionId = $nuxt.$route.params.id;
      this.collection =  this.collections.find(col => {
        return col.id === collectionId;
      });
      this.ready = true;
    } catch (e) {

    }

  }
}
</script>

<style lang="scss">
.main-area {
  margin-top: 73px;
}
.checkout-area-row {
  //display: flex;
  //justify-content: center;
  //align-items: center;
}
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
      font-size: 26px;
      line-height: 1.3;
    }

    .collection {
      margin-top: 16px;
      color: #666666;
      font-size: 14px;
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
        font-size: 16px;
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
  .checkout-area-wrapper {
    width: 100%;
    //border: 1px solid red;
  }
  .main-area {
    margin-top: 53px;
  }
}
.checkout-area-wrapper {
  width: 100%;
}
</style>
