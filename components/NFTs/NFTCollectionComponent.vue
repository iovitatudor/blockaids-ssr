<template>
  <v-row class="nft-collection-list text-center">
    <v-col md="12">
      <h3>Our NFT Collection</h3>
    </v-col>
    <NFTItemComponent v-for="(collection, key) in collections"
                      :key="key"
                      :item="collection"/>
<!--    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022.png'}"/>-->
<!--    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (1).png'}"/>-->
<!--    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (3).png'}"/>-->
<!--    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (4).png'}"/>-->
<!--    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (5).png'}"/>-->
<!--    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (6).png'}"/>-->
  </v-row>
</template>

<script>
import NFTItemComponent from "./NFTItemComponent";
import collections from "../../api/collections.json";

export default {
  name: "NFTCollectionComponent",
  components: {NFTItemComponent},
  data() {
    return {
      collections: {},
    }
  },
  mounted() {
    this.collections = collections.data;
  }
}
</script>

<style lang="scss" scoped>
.nft-collection-list {
  h3 {
    font-size: 2.5em;
  }
}
</style>
