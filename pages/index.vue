<template>
  <div>
    <BannerComponent/>
    <HowWorksComponent/>
    <GetExclusiveComponent/>
    <NFTCollectionComponent/>
    <div class="text-center">
      <NuxtLink to="/collections" class="btn-standart">View All Collections</NuxtLink>
    </div>
    <AboutComponent/>
    <PartnersComponent/>
  </div>
</template>

<script>
import BannerComponent from "../components/BannerComponent";
import HowWorksComponent from "../components/HowWorksComponent";
import GetExclusiveComponent from "../components/GetExclusiveComponent";
import NFTCollectionComponent from "../components/NFTs/NFTCollectionComponent";
import AboutComponent from "../components/AboutComponent";
import PartnersComponent from "../components/PartnersComponent";

export default {
  name: 'Home',
  components: {
    BannerComponent,
    HowWorksComponent,
    GetExclusiveComponent,
    NFTCollectionComponent,
    AboutComponent,
    PartnersComponent,
  },
}
</script>

<style>
.main-area {
  margin-top: 73px;
}
</style>
