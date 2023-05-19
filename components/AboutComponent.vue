<template>
  <div class="about-area">
    <div class="about-area-inside">
      <h3>About BlockAIDS</h3>
      <p>A decentralized electronic ecosystem on the blockchain, that amplifies response measures to HIV/AIDS worldwide,
        utilizing Web 3.0 technologies and allows millions of people living with HIV to access their records, medicines,
        and services from any place in the world.</p>
      <v-img src="/images/image 52 1.png"></v-img>
      <a href="https://blockaids.world" class="btn-standart" target="_blank">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComponent"
}
</script>

<style lang="scss" scoped>
.about-area {
  text-align: center;
  background-color: #f3fbfb;
  margin-top: 120px;

  .about-area-inside {
    max-width: 50%;
    margin: 0 auto;
    padding-top: 104px;
    padding-bottom: 120px;

    h3 {
      margin-bottom: 32px;
      font-size: 40px;
    }

    p {
      font-size: 20px;
      color: #4D4D4D;
    }

    .v-image {
      max-width: 532px;
      margin: 56px auto;
    }
  }
}

@media only screen and (max-width: 600px) {
  .about-area {
    text-align: left;
    background-color: #f3fbfb;
    margin-top: 40px;

    .about-area-inside {
      max-width: 100%;
      margin: 0 auto;
      padding: 40px 20px;

      h3 {
        margin-bottom: 20px;
        font-size: 24px;
      }

      p {
        font-size: 16px;
        color: #4D4D4D;
      }

      .v-image {
        max-width: 100% !important;
        width: 80% !important;
        margin: 30px auto;
      }
    }
  }
}
</style>
