

<template>
  <div  style=" background : #2d2013">
    <v-container>
      <v-row>
        <v-col v-for="(meal, index) in meals" :key="index" cols="12"
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
</template>

<script>
import { showResult } from "../api.js";
export default {
  name: "SearchResults",

  data() {
    return {
      meals: [],
      q: this.$route.params.query
    };
  },

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

  methods: {
    showDetails(q) {
      showResult(q).then(response => {
        this.meals = response.data["meals"];

        if (this.meals == null)
          this.$router.push({
            name: "not-found"
          });
      });
    }
  }
};
</script>

<style scoped>
</style>
