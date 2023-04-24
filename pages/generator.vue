<template>
  <div class="generator-page-area">
    <v-row>
      <v-col>
        <h3>Avatar Constructor</h3>
      </v-col>
    </v-row>
    <ImageConstructor/>
    <v-row>
      <v-col md="3" offset-md="5">
        <p>Remember! All money from sold NFTs will be spent to help people living with HIV to get access to the global
          electronic system, designed to stop AIDS by 2030</p>
      </v-col>
    </v-row>
    <AboutComponent/>
    <PartnersComponent/>
  </div>
</template>

<script>
import ImageConstructor from "../components/Generators/ImageConstructor";
import AboutComponent from "../components/AboutComponent";
import PartnersComponent from "../components/PartnersComponent";

export default {
  name: "generator",
  components: {ImageConstructor, AboutComponent, PartnersComponent},
}
</script>

<style lang="scss" scoped>
.generator-page-area {
  h3 {
    font-size: 2.5em;
    text-align: center;
  }
}
</style>
