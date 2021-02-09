<template>
    <div class="accueil">
        <h1>Bonjour, bienvenue sur notre générateur de devis rapide</h1>
        <h2>Dans quelques minutes, vous aurez un tarif indicatif pour votre projet</h2>
        <div class="button button-gradient" @click='$store.commit("suivant")'>
            <p>Démarrer</p>
        </div>
        <a href="https://visualkraken.be">
            <p>Ou revenir sur <span>visualkraken.be</span></p>
        </a>
    </div>
</template>

<style lang="scss" scoped>
span{
    text-decoration: underline;
}
.accueil{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

<script>
export default {
    name:"Accueil",
    methods:{
        
    }
}
</script>