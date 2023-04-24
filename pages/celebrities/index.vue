<template>
  <div class="celebrities-page-area">
    <v-row>
      <v-col>
        <h3>Celebrities</h3>
      </v-col>
    </v-row>
    <CelebritiesListComponent/>
    <AboutComponent/>
    <PartnersComponent/>
  </div>
</template>

<script>
import CelebritiesListComponent from "../../components/Celebrities/CelebritiesListComponent";
import AboutComponent from "../../components/AboutComponent";
import PartnersComponent from "../../components/PartnersComponent";

export default {
  name: "celebrities",
  components: {CelebritiesListComponent, AboutComponent, PartnersComponent},
}
</script>

<style lang="scss" scoped>
.celebrities-page-area {
  h3 {
    font-size: 2.5em;
  }
}
</style>
