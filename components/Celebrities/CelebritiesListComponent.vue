<template>
  <v-row class="celebrities-list text-center">
    <v-col md="12">
      <h3>{{ title }}</h3>
    </v-col>
    <CelebrityItemComponent v-for="(celebrity, key) in celebrities" :key="key" :celebrity="celebrity"/>
  </v-row>
</template>

<script>
import CelebrityItemComponent from "./CelebrityItemComponent";
import celebrities from "../../api/celebrieties.json";
export default {
  components: {CelebrityItemComponent},
  name: "CelebritiesComponent",
  props: {title: String},
  data() {
    return {
      celebrities: [],
    }
  },
  mounted() {
    this.celebrities = celebrities.data;
    // console.log(celebrities);
  }
}
</script>

<style lang="scss" scoped>
.celebrities-list {
  h3 {
    font-size: 2.5em;
  }
}
</style>
