<template>
  <v-col md="3" class="celebrity-item">
    <div>
<!--      <img src="/images/unsplash_IF9TK5Uy-KI.png" alt="">-->
<!--      <img :src="celebrity.image" alt="">-->
      <v-img :src="celebrity.image" class="rounded-card"/>
    </div>
    <p>{{ celebrity.name }}</p>
    <span>{{ celebrity.profession }}</span>
    <v-btn to="/celebrities/1">
      Get exclusive signed NFT
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "CelebrityItemComponent",
  props: {celebrity: Object},
}
</script>

<style lang="scss" scoped>
.celebrity-item {
  padding: 3em 2em;
  img {
    border-radius: 50%;
  }
  .rounded-card {
    border-radius: 50%;
    width: 100%;
  }
}
</style>
