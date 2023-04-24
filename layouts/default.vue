<template>
  <v-app light class="overflow-hidden">
    <Header/>
    <v-main class="main-area">
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from "../components/Partials/Header";
import Footer from "../components/Partials/Footer";

export default {
  name: 'DefaultLayout',
  components: {Header, Footer},
}
</script>


