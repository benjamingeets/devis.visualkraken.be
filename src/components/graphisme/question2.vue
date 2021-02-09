<template>
    <div class="question">
        <h1>Que souhaitez-vous?</h1>
        <div class="button" @click="choisir('Illustration')">
            <p>Illustration</p>
        </div>
        <div class="button" @click="choisir('Identité graphique (logo, police,...)')">
            <p>Identité graphique (logo, police,...)</p>
        </div>
        <div class="button" @click="choisir('Carte de restaurant, carte de visite, flyers,...')">
            <p>Carte de restaurant, carte de visite, flyers,...</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        choisir(rep){
            this.$store.state.site.type = rep
            this.$store.state.progress += 75
            switch (rep) {
                case 'Illustration':
                    this.$store.state.prix += 200
                    break;
                case 'Identité graphique (logo, police,...)':
                    this.$store.state.prix += 300
                    break;
                case 'Carte de restaurant, carte de visite, flyers,...':
                    this.$store.state.prix += 200
                    break;
                default:
                    break;
            }
            this.$store.state.etape++
        }
    }
}
</script>