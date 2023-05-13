<template>
  <div class="collection-page-area">
    <NFTCollectionComponent/>
    <AboutComponent/>
    <PartnersComponent/>
  </div>
</template>

<script>
import NFTCollectionComponent from "../components/NFTs/NFTCollectionComponent";
import AboutComponent from "../components/AboutComponent";
import PartnersComponent from "../components/PartnersComponent";

export default {
  name: "collection",
  components: {NFTCollectionComponent, AboutComponent, PartnersComponent},
}
</script>

<style lang="scss" scoped>

</style>
