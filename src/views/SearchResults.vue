

<template>
  <div  style=" background : #2d2013" v-if="searchMeals!=null"> 

    <v-container>
      <v-row >
        <v-col v-for="(meal, index) in  searchMeals" :key="index" cols="12"
          md="6"
          lg="4">
          <v-card>
            <router-link
              :to="{ name: 'ShowDetails', params: { id: meal.idMeal } }"
            >
              <v-img   
                :src="meal.strMealThumb"
                aspect-ratio="1"
                class="grey lighten-2"
              >
              </v-img>


            <v-card-title>
            {{ meal.strMeal }}
            </v-card-title>
               
            </router-link>

          
             

          </v-card>
        </v-col>
      </v-row>

     
    </v-container>
  </div>
  <div v-else>
      
     
      {{mealNotFound()}}

  </div>
</template>

<script>

import {  mapGetters } from 'vuex';

export default {
  name: "SearchResults",

 

 /*beforeRouteUpdate(to, from, next) {
    this.showDetails(to.params.query);
    next();
  },
*/
  created() {
 
    this.showDetails(this.$route.params.query);
  },
 watch :{

      '$route' (to)
      {
            this.showDetails(to.params.query);
      }

  },

   computed : {
    ...mapGetters({
      searchMeals:"getSearchedMeals"
    })

  },

  methods: {
    showDetails(q) {
        this.$store.dispatch('getSearchedMeal',q)
      
    },
     mealNotFound()
     {
        this.$router.push({
            name: "not-found"
          });
     }
      
     

  }
};
</script>

<style scoped>
</style>
