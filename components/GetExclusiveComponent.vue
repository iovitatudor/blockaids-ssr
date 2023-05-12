<template>
  <div class="get-exclusive">
    <v-container>
      <v-row class="get-exclusive-inside">
        <v-col md="6">
          <h3>
            Get <span class="green-text">an exclusive NFT</span>,
            dedicated to people living <span class="red-text">with HIV</span>
          </h3>
          <p>100% of money collected from donations under this NFT campaign will be distributed for needs of people
            living with AIDS and from groups at risk (drug users, LGBT, sexual workers, etc.) </p>
          <v-btn class="btn-standart">Select NFT</v-btn>
        </v-col>
        <v-col md="6">
          <v-img src="images/Frame 362.png" width="100%"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "GetExclusiveComponent"
}
</script>

<style lang="scss" scoped>
.get-exclusive {
  background-color: #f3fbfb;
  padding: 120px 0;
}
.get-exclusive-inside {
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 50px;
    line-height: 1.3;
    margin-bottom: 32px;
    .green-text {
      color: #58CAC0 !important;
    }

    .red-text {
      color: #D31D24 !important;
    }
  }
  p {
    font-size: 18px;
    color: #808080;
    margin-bottom: 80px;
  }
}
@media only screen and (max-width: 600px) {
  .get-exclusive {
    display: none;
  }
}
</style>
