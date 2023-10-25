<template>
  <v-app>

    <navbarComp></navbarComp>
    <v-main>
      <router-view/>
    </v-main>
    <footerComp></footerComp>
  </v-app>
</template>

<script>
import navbarComp from './components/NavBar.vue'
import footerComp from './components/FooterBar.vue'

export default {
  name: 'App',
  components:{
    navbarComp,
    footerComp
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
  background: linear-gradient(rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)), url('./assets/background-image.jpg') no-repeat center center fixed !important;
  background-size: auto;
  }
</style>
