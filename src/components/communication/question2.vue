<template>
    <div class="question">
        <h1>Que souhaitez-vous?</h1>
        <div class="button" @click="choisir('Gestion de réseaux sociaux')">
            <p>Gestion de réseaux sociaux</p>
        </div>
        <div class="button" @click="choisir('Boutique de réseaux sociaux')">
            <p>Boutique de réseaux sociaux</p>
        </div>
        <div class="button" @click="choisir('Vidéo')">
            <p>Vidéo</p>
        </div>
        <div class="button" @click="choisir('Assistance')">
            <p>Assistance</p>
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
                case 'Gestion de réseaux sociaux':
                    this.$store.state.prix = "300€/mois"
                    break;
                case 'Boutique de réseaux sociaux':
                    this.$store.state.prix += 150
                    break;
                case 'Vidéo':
                    this.$store.state.prix += 300
                    break;
                case 'Assistance':
                    this.$store.state.prix = "20€/heure"
                    break;
                default:
                    break;
            }
            this.$store.state.etape++
        }
    }
}
</script>