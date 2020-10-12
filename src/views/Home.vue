
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

              <v-card>
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
import { randomMeal } from "@/api";

export default {
  name: "Home",

  data() {
    return {
      meals: []
    };
  },

  created() {
    randomMeal().then(response => {
      this.meals = response.data["meals"];
      console.log(this.meals);
    });
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

