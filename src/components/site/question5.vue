<template>
    <div class="question">
        <h1>De quelles fonctionnalités avez-vous besoin?</h1>
        <div class="choix">
            <div><input id="contact" type="checkbox" v-model="$store.state.site.fonctions.contact"> <label for="contact">Formulaire de contact</label></div>
            <div><input id="form" type="checkbox" v-model="$store.state.site.fonctions.form"> <label for="form">Formulaire personnalisé</label></div>
            <div><input id="booking" type="checkbox" v-model="$store.state.site.fonctions.booking"> <label for="booking">Prise de rendez-vous</label></div>
        </div>
        <div class="button" @click="choisir">
            <p>Ok</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.choix{
    display: flex;
    flex-direction: column;
    div{
        margin:10px 0;
        label{
            color:#2463AA;
        }
    }
}
</style>

<script>
export default {
    methods:{
        choisir(){
            this.$store.state.progress += 14
            if (this.$store.state.site.fonctions.contact) {
                this.$store.state.prix += 20
            }
            if (this.$store.state.site.fonctions.form) {
                this.$store.state.prix += 50
            }
            if (this.$store.state.site.fonctions.booking) {
                this.$store.state.prix += 50
            }
            this.$store.state.etape++
        }
    }
}
</script>