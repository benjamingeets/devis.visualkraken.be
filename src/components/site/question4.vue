<template>
    <div class="question">
        <h1>Souhaitez-vous des statistiques détaillées sur vos visiteurs?</h1>
        <div class="button" @click="choisir('Oui')">
            <p>Oui</p>
        </div>
        <div class="button" @click="choisir('Non')">
            <p>Non</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        choisir(rep){
            this.$store.state.site.stats = rep
            this.$store.state.progress += 14
            switch (rep) {
                case 'Oui':
                    this.$store.state.prix += 25
                    break;
                case 'Non':
                    this.$store.state.prix += 0
                    break;
                default:
                    break;
            }
            this.$store.state.etape++
        }
    }
}
</script>