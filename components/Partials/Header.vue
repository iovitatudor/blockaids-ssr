<template>
  <v-app-bar
    absolute
    color="white"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <v-spacer></v-spacer>
    <NuxtLink to="/" class="logo">
      <img src="images/logo.png" alt="">
    </NuxtLink>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <NuxtLink to="/celebrities" class="menu-link">Celebrities</NuxtLink>
    <NuxtLink to="/collections" class="menu-link">NFT Collection</NuxtLink>
    <NuxtLink to="/generator" class="menu-link">Avatar Generator</NuxtLink>
    <NuxtLink to="/" class="menu-link">About BlockAIDS</NuxtLink>
    <NuxtLink to="/" class="menu-link">Docs</NuxtLink>
    <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
.logo {
  img {
    height: 40px;
    margin-top: 10px;
  }
}

.menu-link {
  margin: 0 15px;
}

.main-area {
  margin-top: 100px;
}
</style>
