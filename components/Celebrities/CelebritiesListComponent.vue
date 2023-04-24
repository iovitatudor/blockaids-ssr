<template>
  <v-row class="celebrities-list text-center">
    <v-col md="12">
      <h3>{{ title }}</h3>
    </v-col>
    <CelebrityItemComponent v-for="i in 8"/>
  </v-row>
</template>

<script>
import CelebrityItemComponent from "./CelebrityItemComponent";

export default {
  components: {CelebrityItemComponent},
  name: "CelebritiesComponent",
  props: {title: String},
}
</script>

<style lang="scss" scoped>
.celebrities-list {
  h3 {
    font-size: 2.5em;
  }
}
</style>
