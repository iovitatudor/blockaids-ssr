<template>
  <div>
    <v-navigation-drawer
      app
      fixed
      v-model="showMenu"
    >
      <v-list dense>
        <v-list-item @click="doNothing">
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="doNothing">
          <v-list-item-action>
            <v-icon>help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      fixed
    >
      <v-toolbar-title>Vue News</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="toggleMenu"></v-app-bar-nav-icon>
    </v-app-bar>

  </div>
</template>

<script>
export default {
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
