<template>
  <div class="main-banner">
    <v-container class="desktop-only">
      <v-row class="main-inside">
        <v-col md="6">
          <h1>
            <span class="green-text">Help us</span>
            stop AIDS worldwide. Support people living
            <span class="red-text">with HIV</span>
          </h1>
          <h2>
            100% of the money collected from donations under this NFT campaign will be distributed for the needs of
            people living with AIDS and from key affected populations (drug users, LGBT, sex workers, etc.)
          </h2>
          <a href="https://giveth.io/donate/blockaids" target="_blank" class="btn-standart">Donate Now</a>
        </v-col>
        <v-col class="md-1"></v-col>
        <v-col md="5">
          <img src="images/OBJECTS.png" alt="">
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mobile-only">
      <v-row class="main-inside">
        <v-col md="12" col="12">
          <img src="images/OBJECTS.png" alt="">
        </v-col>
        <v-col md="12" col="12">
          <h1>
            <span class="green-text">Help us</span>
            stop AIDS worldwide. Support people living
            <span class="red-text">with HIV</span>
          </h1>
          <h2>
            100% of the money collected from donations under this NFT campaign will be distributed for the needs of
            people living with AIDS and from key affected populations (drug users, LGBT, sex workers, etc.)
          </h2>
          <a href="https://giveth.io/donate/blockaids" target="_blank" class="btn-standart">Donate Now</a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "BannerComponent"
}
</script>

<style lang="scss" scoped>
.desktop-only {
  display: block;
}

.mobile-only {
  display: none;
}

.main-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3fbfb;
  margin-top: 0px;

  h1 {
    font-size: 50px;
    line-height: 1.2;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 18px;
    font-weight: 1.3;
    color: #808080;
    margin-bottom: 70px;
  }

  img {
    width: 100%;
    margin: 50px 0;
  }

  .main-inside {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green-text {
    color: #58CAC0;
  }

  .red-text {
    color: #D31D24;
  }
}

@media only screen and (max-width: 600px) {
  .main-banner {
    display: block;
    margin-top: -10px;
    padding-bottom: 48px;

    .main-inside {
      display: block;
    }

    h1 {
      font-size: 24px;
      line-height: 1.4;
      margin-bottom: 16px;
    }

    h2 {
      margin-bottom: 32px;
    }
  }
}
</style>
