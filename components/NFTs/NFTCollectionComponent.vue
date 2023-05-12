<template>
  <div class="collections-area">
    <v-container class="text-center">
      <v-row>
        <v-col md="12">
          <h3>Our NFT Collection</h3>
        </v-col>
        <v-col md="12" class="collection-list-wrapper" v-if="blueCollection.length">
          <VueSlickCarousel v-bind="settings">
            <div class="collection-item-wrapper" v-for="(collection, key) in blueCollection" :key="key">
              <NuxtLink to="/checkout">
                <div class="collection-item">
                  <v-img :src="collection.image_name"></v-img>
                  <p class="collection-name">{{ collection.collection }}</p>
                  <p class="name">{{ collection.name }}</p>
                </div>
              </NuxtLink>
            </div>
          </VueSlickCarousel>
        </v-col>

        <v-col md="12" class="collection-list-wrapper" v-if="greenCollection.length">
          <VueSlickCarousel v-bind="settings">
            <div class="collection-item-wrapper" v-for="(collection, key) in greenCollection" :key="key">
              <NuxtLink to="/checkout">
                <div class="collection-item">
                  <v-img :src="collection.image_name"></v-img>
                  <p class="collection-name">{{ collection.collection }}</p>
                  <p class="name">{{ collection.name }}</p>
                </div>
              </NuxtLink>
            </div>
          </VueSlickCarousel>
        </v-col>

        <v-col md="12" class="collection-list-wrapper" v-if="orangeCollection.length">
          <VueSlickCarousel v-bind="settings">
            <div class="collection-item-wrapper" v-for="(collection, key) in orangeCollection" :key="key">
              <NuxtLink to="/checkout">
                <div class="collection-item">
                  <v-img :src="collection.image_name"></v-img>
                  <p class="collection-name">{{ collection.collection }}</p>
                  <p class="name">{{ collection.name }}</p> {{ collection.id}} {{ collection.image_name }}
                </div>
              </NuxtLink>
            </div>
          </VueSlickCarousel>
        </v-col>

        <v-col md="12" class="collection-list-wrapper" v-if="pinkCollection.length">
          <VueSlickCarousel v-bind="settings">
            <div class="collection-item-wrapper" v-for="(collection, key) in pinkCollection" :key="key">
              <NuxtLink to="/checkout">
                <div class="collection-item">
                  <v-img :src="collection.image_name"></v-img>
                  <p class="collection-name">{{ collection.collection }}</p>
                  <p class="name">{{ collection.name }}</p>
                </div>
              </NuxtLink>
            </div>
          </VueSlickCarousel>
        </v-col>

        <v-col md="12" class="collection-list-wrapper" v-if="redCollection.length">
          <VueSlickCarousel v-bind="settings">
            <div class="collection-item-wrapper" v-for="(collection, key) in redCollection" :key="key">
              <NuxtLink to="/checkout">
                <div class="collection-item">
                  <v-img :src="collection.image_name"></v-img>
                  <p class="collection-name">{{ collection.collection }}</p>
                  <p class="name">{{ collection.name }}</p>
                </div>
              </NuxtLink>
            </div>
          </VueSlickCarousel>
        </v-col>


        <v-col md="12" class="text-center">
          <v-btn class="btn-standart">View All Collections</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NFTItemComponent from "./NFTItemComponent";
import collections from "../../api/collections.json";
import MultiColorsCollection from "../../api/2-colors-collection.json";
import BlueCollection from "../../api/Blue-collection.json?cdmvdfk=vfd"
import GreenCollection from "../../api/Green-collection.json"
import OrangeCollection from "../../api/Orange-collection.json"
import PinkCollection from "../../api/Pink-collection.json"
import RedCollection from "../../api/Red-collection.json"
import BlueColl from "../../api/blue-coll.json"
import GreenColl from "../../api/green-coll.json"
import OrangeColl from "../../api/orange-coll.json"
import PinkColl from "../../api/pink-coll.json"
import RedColl from "../../api/red-coll.json"
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "NFTCollectionComponent",
  components: {NFTItemComponent, VueSlickCarousel},
  data() {
    return {
      settings: [
        {
          "lazyLoad": "ondemand",
          "arrows": true,
          "dots": true,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 4,
          "slidesToScroll": 4,
          "initialSlide": 0,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true,
                "dots": true
              }
            },
            {
              "breakpoint": 600,
              "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2,
                "initialSlide": 2
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            }
          ]
        }
      ],
      multiColorCollection: [],
      greenCollection: [],
      blueCollection: [],
      orangeCollection: [],
      pinkCollection: [],
      redCollection: [],
    }
  },
  mounted() {
    this.multiColorCollection = MultiColorsCollection;
    this.greenCollection = GreenColl;
    this.blueCollection = BlueColl;
    this.orangeCollection = OrangeColl;
    this.pinkCollection = PinkColl;
    this.redCollection = RedColl;
  }
}
</script>

<style lang="scss">
.collections-area {
  h3 {
    margin-top: 104px;
    font-size: 40px;
  }

  .collection-list-wrapper {
    margin-bottom: 80px;
  }

  .collection-item-wrapper {
    a {
      text-decoration: none;

      .collection-item {
        margin: 5px;
        padding: 20px;
        box-shadow: 0px 6px 12px -6px rgba(58, 182, 171, 0.12), 0px 8px 24px -4px rgba(58, 182, 171, 0.08);
        border-radius: 16px;

        .collection-name {
          font-size: 16px;
          color: #4D4D4D;
          margin-bottom: 8px;
          text-align: left;
          margin-top: 16px;
          text-decoration: none;
        }

        .name {
          font-size: 18px;
          font-family: 'Satoshi-Bold';
          text-align: left;
          color: #000;
          text-decoration: none;
          margin-bottom: 50px;
        }
      }
    }
  }

  .slick-dots li button:before {
    color: #A6E3DD !important;
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: #3AB6AB;
    font-size: 12px;
  }

  .slick-dots {
    bottom: -30px;
  }

  .slick-arrow {
    width: 25px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .slick-next::before {
    display: none;
  }

  .slick-prev {
    background-image: url("/images/arrow-1.png");
    left: -32px;
  }

  .slick-prev::before {
    display: none;
  }

  .slick-next {
    background-image: url("/images/arrow-2.png");
    right: -32px;
  }
}

@media only screen and (max-width: 600px) {
  .collections-area h3 {
    margin-top: 0;
    font-size: 24px;
  }
  .collections-area {

    .v-image {
      width: 100% !important;
    }

    .slick-arrow {
      display: none !important;
    }
  }

}
</style>
