<template>
    <div class="question">
        <h1>Quel type de site internet?</h1>
        <div class="button" @click="choisir('Blog')">
            <p>Blog</p>
        </div>
        <div class="button" @click="choisir('Site vitrine')">
            <p>Site vitrine</p>
        </div>
        <div class="button" @click="choisir('e-Commerce')">
            <p>e-Commerce</p>
        </div>
        <div class="button" @click="choisir('Autre')">
            <p>Autre</p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        choisir(rep){
            this.$store.state.site.type = rep
            this.$store.state.progress += 10
            switch (rep) {
                case 'Blog':
                    this.$store.state.prix += 500
                    break;
                case 'Site vitrine':
                    this.$store.state.prix += 400
                    break;
                case 'e-Commerce':
                    this.$store.state.prix += 700
                    break;
                case 'Autre':
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