<template>
    <div>
        <b-card
            :title="film.Title"
            :img-src="film.Poster"
            img-alt="Image"
            img-top
            tag="article"
            style="width: 20rem;"
            class="mb-2">

            <b-button :href="`#/movie/${film.imdbID}`" variant="primary">Voir ID</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {film : Object},
    
}
</script>

<style>
    .card-body{
        height: 10rem;
    }

    .card-img-top{
        height: 30rem;
    }
</style>