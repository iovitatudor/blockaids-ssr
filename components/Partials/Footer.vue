<template>
  <div fluid class="footer-area">
    <v-container>
      <v-row class="footer-area-inside">
        <v-col md="3" class="footer-logo">
          <nuxt-link to="#">
            <img src="/images/logo.png" alt="">
          </nuxt-link>
        </v-col>
        <v-col md="3" class="footer-menu">
          <ul>
            <li>
              <nuxt-link to="#">Pricing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Partners</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">FAQ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Contacts</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col md="3" class="footer-menu">
          <ul>
            <li>
              <nuxt-link to="#">Pricing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Partners</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">FAQ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Contacts</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col md="3" class="footer-menu">
          <ul>
            <li>
              <nuxt-link to="#">Pricing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Partners</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">FAQ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Contacts</nuxt-link>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer-area {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background-color: #1F2131;
  margin-top: 2em;

  .footer-area-inside {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2em;
  }

  .footer-logo {
    img {
      width: 100%;
      height: auto;
    }
  }

  .footer-menu {
    ul {
      list-style: none;

      li {
        margin-bottom: 20px;

        a {
          color: #FFF;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
