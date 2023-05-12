<template>
  <div>
    <BannerComponent/>
    <HowWorksComponent/>
    <GetExclusiveComponent/>
    <NFTCollectionComponent/>
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
