
<template >
<div id="app">
  <v-app  class="app">
   
      <Header/>
      
    

    <v-main>

    <router-view></router-view>
    </v-main>
     

     <Footer/>
  </v-app>

</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer"




export default {
  name: "App",

  components: {
    Header,
    Footer

  },

  data: () => ({
    //
  })
};
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color:#161009;
  
}

</style>