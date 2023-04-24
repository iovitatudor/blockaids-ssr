<template>
  <v-row>
    <CelebritiesGenerator/>
    <NFTCollectionComponent/>
<!--    <PartnersComponent/>-->
  </v-row>
</template>

<script>
import CelebritiesGenerator from "../../components/Generators/CelebritiesGenerator";
import PartnersComponent from "../../components/PartnersComponent";
import NFTCollectionComponent from "../../components/NFTs/NFTCollectionComponent";

export default {
  name: "_id",
  components: {CelebritiesGenerator, PartnersComponent, NFTCollectionComponent},
}
</script>

<style scoped>

</style>
