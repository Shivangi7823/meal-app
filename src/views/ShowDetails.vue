
<template>
  <div style=" background : #2d2013">
    <div v-for="m in showMeal" :key="m.idMeal">
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex xs6 md3>
            <h2 class="heading">{{ m.strMeal }}</h2>
            <br />
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
            <h2 style="color : white">Ingredients</h2>
            <br />

            <ul v-for="index in 20" :key="index">
              <li v-if="getIngredient(index)" :key="index" style="color:white">
                {{ getIngredient(index) }}
              </li>
            </ul>
          </v-flex>

          <v-flex xs6 md3>
            <h2 style="color : white">Measurement</h2>
            <br />
            <ul v-for="index in 20" :key="index">
              <li
                v-if="getMeasurement(index)"
                :key="index"
                style="color : white"
              >
                {{ getMeasurement(index) }}
              </li>
            </ul>
          </v-flex>
        </v-layout>
        <br />
        <br />
        <br />
        <h2 class="heading">Instructions</h2>
        <v-layout align-content-center style="color : white">
          {{ m.strInstructions }}
        </v-layout>

        <br />
        <br />
        <br />

        <v-layout>
          <youtube :video-id="videoId(m.strYoutube)"></youtube>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>




<script>
import { mapGetters } from "vuex";
import getYouTubeID from "get-youtube-id";

export default {
  name: "ShowDetails",

  created() {
    this.showDetails(this.$route.params.id);
  },

  computed: {
    ...mapGetters({
      showMeal: "getMealDetails"
    })
  },

  methods: {
    showDetails(id) {
      this.$store.dispatch("getMealDetails", id);
    },

    getIngredient(i) {
      const ingr = `strIngredient${i}`;

      const val = this.showMeal[0][ingr];
      
      if (val && val.trim()) return val;
    },

    getMeasurement(i) {
      const measure = "strMeasure" + i;

      const val = this.showMeal[0][measure];

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
