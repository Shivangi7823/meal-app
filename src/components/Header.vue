


<template>
  <v-container>
    <v-toolbar flat color="#161009">
      <v-toolbar-title style="color:white">CookBook</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text color="dark-blue"
          ><router-link to="/">Home</router-link></v-btn
        >

        <v-text-field
          placeholder="search meal"
          v-model="searchQuery"
          outlined
          solo="true"
        ></v-text-field>

        <v-btn color="white" icon small @click="search()"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ""
    };
  },

  methods: {
    search() {
      this.$router.push({
        name: "SearchResults",
        params: { query: this.searchQuery }
      });
      this.searchQuery = "";
    }
  }
};
</script>
<style scoped>
.textbox {
  color: aqua;
  background-color: azure;
}
</style>