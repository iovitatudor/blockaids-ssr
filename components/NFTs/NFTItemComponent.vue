<template>
  <v-col class="nft-collection-item" md="4">
    <img :src="`/images/collections/${item.image}`" class="collection-image" width="90%"/>
    <v-btn to="/checkout">Get this NFT</v-btn>
  </v-col>
</template>

<script>
export default {
  name: "NFTItemComponent",
  props: {item: Object},
}
</script>

<style lang="scss" scoped>
.nft-collection-item {
  padding: 2em;


  img {
    //height: 300px;
    margin-bottom: 30px;
  }
}
</style>
