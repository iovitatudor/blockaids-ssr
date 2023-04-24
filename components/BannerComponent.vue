<template>
  <v-row class="main-banner">
    <v-col>
      <h1>BlockAIDS</h1>

      <h2>Transforming the healthcare landscape all over the world</h2>

      <p>
        We are launching a first decentralized Ecosystem for people living with HIV and by key and marginalised
        populations Transparent Informational System, Web/Mobile app on blockchain, DAO and a decentralized research
        Ecosystem. Additionally, we are launching a NFT collection that will be distributed among early supporters of
        our project.
      </p>
    </v-col>
    <v-col>
      <img src="images/UNAIDS-heart-of-ribbons.png" alt="">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BannerComponent"
}
</script>

<style lang="scss" scoped>
.main-banner {
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3em;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 1em;
    line-height: 1;
  }

  img {
    width: 100%;
  }
}
</style>
