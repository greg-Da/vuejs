<template>
  <div>
      <h1>Detail</h1>
      <AboutFilm :film="film"></AboutFilm>
  </div>
</template>

<script>

const axios = require('axios').default;

import AboutFilm from "../components/AboutFilm"

export default {
  name: 'HomePage',
  components:{AboutFilm},
  data(){
    return{
      film: null,
      filmId: this.$route.params.id,
    
    }
  },
  mounted(){
console.log("http://www.omdbapi.com/?i='+ this.filmID +'&apikey=904eed5c")
    axios
      .get('http://www.omdbapi.com/?i='+ this.filmID +'&apikey=904eed5c')
      .then( response => (this.film = response.data) )

  }
}
</script>

<style>
</style>
