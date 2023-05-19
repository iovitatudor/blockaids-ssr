<template>
  <div class="header-menu">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-spacer class="menu-list-desktop"></v-spacer>
      <NuxtLink to="/" class="logo">
        <v-img src="/images/logo.png" width="200px"></v-img>
      </NuxtLink>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <div class="menu-list-desktop">
        <div class="text-right">
          <NuxtLink to="/collections" class="menu-link">NFT Collection</NuxtLink>
          <a href="https://avatar.blockaids.world" class="menu-link">Avatar Generator</a>
          <a href="https://blockaids.world" class="menu-link" target="_blank">About BlockAIDS</a>
          <a href="https://blockaids.gitbook.io/blockaids-docs" class="menu-link" target="_blank">Docs</a>
          <a href="https://giveth.io/donate/blockaids" target="_blank" class="btn-min">Donate</a>
        </div>

      </div>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon class="menu-burgher-mobile" @click.stop="toggleMenu"></v-app-bar-nav-icon>

    </v-app-bar>
    <v-navigation-drawer
      app
      fixed
      v-model="showMenu"
      class="drawer-mobile"
    >
      <NuxtLink to="/" class="logo logo-drawer">
        <v-img src="/images/logo.png" width="200px"></v-img>
      </NuxtLink>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <NuxtLink to="/collections" class="menu-link">NFT Collection</NuxtLink>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <a href="https://avatar.blockaids.world" class="menu-link">Avatar Generator</a>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <a href="https://blockaids.world/" class="menu-link" target="_blank">About BlockAIDS</a>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <a href="https://blockaids.gitbook.io/blockaids-docs/" class="menu-link" target="_blank">Docs</a>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <a href="https://giveth.io/donate/blockaids" target="_blank" class="btn-min">Donate</a>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    doNothing() {
    },
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
  color: #000 !important;
  text-decoration: none;
  font-size: 18px;
}

.main-area {
  margin-top: 50px;
}

.v-toolbar__content {
  box-shadow: 0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08);
  padding: 35px 0;
}

.v-application a {
  margin-right: 40px;
}

.menu-burgher-mobile {
  display: none;
}

.logo-drawer {
  .v-image {
    margin: 25px;
  }
}

@media only screen and (max-width: 600px) {
  .menu-list-desktop {
    display: none;
  }
  .menu-burgher-mobile {
    display: block;
  }
  .v-toolbar__content {
    padding: 0 15px;
  }
  .v-image {
    width: 150px !important;
  }
}
.btn-min {
  background-color: #3AB6AB;
  box-shadow: 0px 6px 12px -6px rgba(58, 182, 171, 0.08), 0px 8px 24px -4px rgba(58, 182, 171, 0.08) !important;
  border-radius: 8px;
  color: #F3FBFB !important;
  font-weight: 700;
  padding: 12px 20px;
  text-decoration: none;
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
}
</style>
