
<template>
  <div style=" background : #2d2013">
    <div v-for="m in meals" :key="m.idMeal">
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md3>
            <h2 class="heading">{{ m.strMeal }}</h2>
          </v-flex>

          <v-flex xs6 md3>
            <h2 style="color : white">Ingredients</h2>
          </v-flex>

          <v-flex xs6 md3>
            <h2 style="color : white">Measurement</h2>
          </v-flex>
        </v-layout>

        <br>
        
        

        <v-layout row wrap justify-space-around>
          <v-flex xs6 md3>
            <v-card>
              <v-img
               
                :src="m.strMealThumb"
                aspect-ratio="1"
                class="grey lighten-2"
              >
              </v-img>
            </v-card>
          </v-flex>
         
          <v-flex xs6 md3>
            <ul v-for="index in 20" :key="index">
              <li v-if="getIngredient(index)" :key="index" style="color:white">
                {{ getIngredient(index) }}
              </li>
            </ul>
          </v-flex>

          <v-flex xs6 md3>
           <ul v-for="index in 20" :key="index">
              <li v-if="getMeasurement(index)" :key="index" style="color : white">
                       {{ getMeasurement(index) }}
              </li>
            </ul>
          </v-flex>
        </v-layout>
            <br>
            <br>
             <br>
                 <h2 class="heading"> Instructions </h2>
        <v-layout align-content-center style="color : white">
          {{ m.strInstructions }}
        </v-layout>

                <br>
                <br>
                <br>

    
        <v-layout >
          
          <youtube :video-id="videoId(m.strYoutube)" ></youtube>
          
        </v-layout>
      </v-container>
    </div>
  </div>
</template>




<script>
import { showDetails } from "../api";
import getYouTubeID from "get-youtube-id";

export default {
  name: "ShowDetails",

  data() {
    return {
      meals: [],
      id: this.$route.params.id
    };
  },

  created() {
    showDetails(this.id).then(res => {
      this.meals = res.data["meals"];
    });
  },
  methods: {
    getIngredient(i) {
      const ingr = `strIngredient${i}`;


      const val = this.meals[0][ingr];
      if (val && val.trim()) return val;
    },

    getMeasurement(i) {
      const measure = "strMeasure"+i;
      

      const val = this.meals[0][measure];
      
      if (val && val.trim()) return val;
    },

    videoId(url) {
      return getYouTubeID(url);
    }
  }
};
</script>

<style scoped>

.heading {
  text-align: center;
  color: white;
}
</style>
