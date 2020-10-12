<template>
  <v-container fluid class="footer">
    Copyright &copy; {{new Date().getFullYear()}} —
    <strong>CookBook</strong>
  </v-container>
</template>







<script>

export default {
  name: 'Footer',
  
};
</script>
<style scoped>
.footer {
  
  bottom:0;
  width: 100%;

  color: white;
  text-align: center;
  
}

</style>
