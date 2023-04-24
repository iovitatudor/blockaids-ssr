<template>
  <v-row>
    <CelebritiesGenerator/>
    <PartnersComponent/>
  </v-row>
</template>

<script>
import CelebritiesGenerator from "../../components/Generators/CelebritiesGenerator";
import PartnersComponent from "../../components/PartnersComponent";

export default {
  name: "_id",
  components: {CelebritiesGenerator, PartnersComponent},
}
</script>

<style scoped>

</style>
