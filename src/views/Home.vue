<template>
  <div>
      <h1>Home</h1>
      <div class="row">
        <div v-for="film in films"
        :key="film.imdbID" class="col-md-6">
        <Card :film="film"></Card>
        </div>
      </div>
  </div>
</template>

<script>

const axios = require('axios').default;

import Card from "../components/Card"

export default {
  name: 'HomePage',
  components:{Card},
  data(){
    return{
      films: null,
      Title: null,
    
    }
  },
  mounted(){

    axios
      .get('http://www.omdbapi.com/?s=batman&apikey=904eed5c')
      .then( response => (this.films = response.data.Search ) )

  }
}
</script>

<style>
.col-md-6{
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
</style>