<template>
  <v-row class="nft-collection-list text-center">
    <v-col md="12">
      <h3>Our NFT Collection</h3>
    </v-col>
    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022.png'}"/>
    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (1).png'}"/>
    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (3).png'}"/>
    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (4).png'}"/>
    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (5).png'}"/>
    <NFTItemComponent :item="{image: '221107_BLS22525-UNA-WAD-2022 (6).png'}"/>
  </v-row>
</template>

<script>
import NFTItemComponent from "./NFTItemComponent";

export default {
  name: "NFTCollectionComponent",
  components: {NFTItemComponent},
}
</script>

<style lang="scss" scoped>
.nft-collection-list {
  h3 {
    font-size: 2.5em;
  }
}
</style>
