
<template>
  <div style=" background : #2d2013">
    <div v-for="m in meals" :key="m.idMeal">
      <v-container fill-height>
             
            
         

        <v-layout  row wrap justify-center >
          <v-flex md-6>
         
          </v-flex>
                     
          <v-flex md-6>
            <h2 class="heading">{{ m.strMeal }}</h2>
              
              <br>

              <v-card  >
              <router-link
                :to="{ name: 'ShowDetails', params: { id: m.idMeal } }"
              >
                <v-img 
                  :src="m.strMealThumb"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                </v-img>
              </router-link>
            </v-card>
 
          </v-flex>
        </v-layout>

        <br />
      </v-container>
    </div>
  </div>
</template>

<script>

import {  mapGetters } from 'vuex';

export default {
  name: "Home",

 
  computed : {
    ...mapGetters({
      meals:"getMeals"
    })

  },


  created() {
   this.getMeal()
  },

  methods : {

getMeal(){
      this.$store.dispatch('getRandomMeal')
    },
  }
};
</script>
<style scoped>
.v-card {
  max-width: 50%;
  align-items: center;
}
.heading {
  color: white;
  text-align: left;
}

.v-card.on-hover.theme--dark{
background-color: rgba(#FFF, 0.8)

}
</style>

