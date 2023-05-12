<template>
  <div class="how-works">
    <v-container>
      <v-row class="works-row">
        <v-col md="12" col="12">
          <h3>How it works</h3>
          <h4>Support people living with HIV, add our distinctive sign to Your avatar</h4>
        </v-col>
        <v-col md="1"></v-col>
        <v-col md="10">
          <v-row class="guide-list">
            <v-col class="guide-item guide-item-1">
              <img src="/images/Group 219.png" class="work-img"/>
              <div>
                <h6>Step 1</h6>
                <p>Upload Your image</p>
              </div>
            </v-col>
            <v-col class="guide-item guide-item-2">
              <img src="/images/Group 220.png" class="work-img"/>
              <div>
                <h6>Step 2</h6>
                <p>Place our distinctive sign on it</p>
              </div>
            </v-col>
            <v-col class="guide-item guide-item-3">
              <img src="/images/Group 221.png" class="work-img"/>
              <div>
                <h6>Step 3</h6>
                <p>Upload to Your Social Network</p>
              </div>
            </v-col>
            <v-col md="12">
              <v-btn class="btn-standart-red">Generate Your Avatar Now</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HowWorksComponent"
}
</script>

<style lang="scss" scoped>
.how-works {
  text-align: center;

  h3 {
    font-size: 41px;
    margin-top: 104px;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #4D4D4D;
    font-weight: normal;
  }

  .guide-list {
    margin-bottom: 104px;

    .v-image {
      margin: 0 auto;
      width: 100%;
    }

    h6 {
      font-size: 24px;
    }

    p {
      font-size: 20px;
    }
  }

  .guide-list .guide-item {
    position: relative;
  }

  .guide-list .guide-item::after {
    content: '';
    display: block;
    position: absolute;
    width: 60px;
    height: 18px;
    top: 25%;
    right: -7%;
    background-image: url('static/images/Arrow 8.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  .guide-list .guide-item-3::after {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .how-works {
    text-align: left;

    h3 {
      margin-top: 40px;
      margin-bottom: 16px;
      font-size: 24px;
      text-align: left;
    }

    h4 {
      font-size: 16px;
      text-align: left;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .works-row {
      width: 100% !important;
      display: block;
      margin-left: -1px;
    }

    .guide-list {
      display: block;

      h6 {
        font-size: 18px;
      }

      p {
        font-size: 16px;
      }

      .guide-item {
        display: flex;
        align-items: center;
        border: 1px solid #e8f8f6;
        border-radius: 5px;
        margin-bottom: 20px;

        div {
          display: block;
        }
      }
    }

    .guide-list .guide-item::after {
      display: none;
    }

    img {
      margin: 1px;
      height: 78px !important;
      width: auto;
    }
  }
  .how-works .guide-list {
    margin-bottom: 20px;
  }
}
</style>
