<template>
    <div class="question">
        <h1>De quel service avez-vous besoin?</h1>
        <div class="button" @click="choisir('Création de site web')">
            <p>Création de site internet</p>
        </div>
        <div class="button" @click="choisir('Graphisme')">
            <p>Graphisme</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"question1",
    methods:{
        choisir(reponse){
            this.$store.state.choix = reponse
            this.$store.state.progress += 25
            this.$store.commit('suivant')
        }
    }
}
</script>