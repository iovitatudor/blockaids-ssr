<template>
  <div class="partners-area">
    <v-container>
      <v-row>
        <v-col md="12">
          <h3>OUR Partners</h3>
        </v-col>
        <v-col md="12">
          <div class="partners-items">
            <div><img src="/images/partners/dpch.png" alt=""></div>
            <div><img src="/images/partners/eurasian-movement.png" alt=""></div>
            <div><img src="/images/partners/gnp.png" alt=""></div>
            <div><img src="/images/partners/hac.png" alt=""></div>
            <div><img src="/images/partners/positive-initiative.png" alt=""></div>
            <div><img src="/images/partners/SEH.png" alt=""></div>
            <div><img src="/images/partners/Group%20227.png" alt=""></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "PartnersComponent"
}
</script>

<style lang="scss" scoped>
.partners-area {
  padding: 104px 0;
  text-align: center;

  h3 {
    font-size: 40px;
  }

  .partners-items {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 85%;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .partners-area {
    padding: 40px 0;
    text-align: center;

    .row {
      display: block;
    }

    h3 {
      font-size: 24px;
    }

    .partners-items {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      div {
        display: block;

        img {
          width: 85%;
        }
      }
    }
  }
  .partners-area .partners-items div {
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
}
</style>
