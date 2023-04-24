<template>
  <v-row class="about-area">
    <v-col md="6" class="text-left">
      <h4>About BlockAIDS platform</h4>
      <p>A decentralized electronic ecosystem on the blockchain, that allows millions of people living with HIV to
        access their records, medicines, and services from any place in the world.</p>
      <v-btn>Read more</v-btn>
    </v-col>
    <v-col md="6">
      <img src="/images/image 53.png" alt="">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AboutComponent"
}
</script>

<style lang="scss" scoped>
.about-area {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h4 {
    font-size: 2em;
    margin-bottom: 1.5em;
    text-align: left;
  }

  p {
    text-align: left;
    margin-bottom: 2em;
  }

  img {
    width: 80%;
    border-radius: 30px 0 30px 30px;
  }
}
</style>
