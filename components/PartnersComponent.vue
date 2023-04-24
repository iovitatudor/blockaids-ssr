<template>
  <v-row class="partners-area text-center">
    <v-col md="12">
      <h3>Our Partners</h3>
    </v-col>
    <v-col md="4">
      <img src="/images/281962905_5046818948700383_2254038143352295306_n.eef208bb.jpeg" alt="">
    </v-col>
    <v-col md="4">
      <img src="/images/276237848_340538718105910_2322984217059949114_n.5fb22f9e.jpeg" alt="">
    </v-col>
    <v-col md="4">
      <img src="/images/partner1.d6928a74.png" alt="">
    </v-col>
    <v-col md="4">
      <img src="/images/partner2.ec4f4b55.png" alt="">
    </v-col>
    <v-col md="4">
      <img src="/images/partner3.a0cc8c03.png" alt="">
    </v-col>
    <v-col md="4">
      <img src="/images/partner4.6362760a.png" alt="">
    </v-col>
    <v-col md="4">
      <img src="/images/partner5.861eed38.png" alt="">
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PartnersComponent"
}
</script>

<style lang="scss" scoped>
.partners-area {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
  }

  h3 {
    font-size: 2.5em;
  }
}
</style>
