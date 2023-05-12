<template>
  <v-app light class="overflow-hidden">
    <Header/>
<!--    <TopToolbar/>-->
    <v-main class="main-area">
      <Nuxt/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import TopToolbar from "../components/TopToolbar";
import Header from "../components/Partials/Header";
import Footer from "../components/Partials/Footer";

export default {
  name: 'DefaultLayout',
  components: {TopToolbar, Header, Footer},
}
</script>


