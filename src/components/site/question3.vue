<template>
    <div class="question">
        <h1>Fournissez vous le contenu? (images,textes,...)</h1>
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
            this.$store.state.site.contenu = rep
            this.$store.state.progress += 12
            switch (rep) {
                case 'Oui':
                    this.$store.state.prix += 0
                    break;
                case 'Non':
                    this.$store.state.prix += 150
                    break;
                default:
                    break;
            }
            this.$store.state.etape++
        }
    }
}
</script>