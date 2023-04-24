<template>
  <v-row>
    <BannerComponent/>
    <ImageConstructor/>
    <CelebritiesListComponent title="Celebrities supporting our initiative"/>
    <NFTCollectionComponent/>
    <AboutComponent/>
    <PartnersComponent/>
  </v-row>
</template>

<script>
import BannerComponent from "../components/BannerComponent";
import ImageConstructor from "../components/Generators/ImageConstructor";
import CelebritiesListComponent from "../components/Celebrities/CelebritiesListComponent";
import NFTCollectionComponent from "../components/NFTs/NFTCollectionComponent";
import AboutComponent from "../components/AboutComponent";
import PartnersComponent from "../components/PartnersComponent";

export default {
  name: 'Home',
  components: {
    BannerComponent,
    ImageConstructor,
    CelebritiesListComponent,
    NFTCollectionComponent,
    AboutComponent,
    PartnersComponent,
  },
}
</script>
