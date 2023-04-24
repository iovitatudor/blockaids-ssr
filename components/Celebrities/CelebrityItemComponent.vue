<template>
  <v-col md="3" class="celebrity-item">
    <div>
      <img src="/images/unsplash_IF9TK5Uy-KI.png" alt="">
    </div>
    <p>Angela Mass</p>
    <span>Near Developer</span>
    <v-btn to="/celebrities/1">
      Get exclusive signed NFT
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "CelebrityItemComponent"
}
</script>

<style scoped>
.celebrity-item {
  padding: 3em 2em;
}
</style>
