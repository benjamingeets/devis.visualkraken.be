<template>
  <transition name="slide" mode="out-in">
   <div class="home">
      <div class="accueil" v-show="etape === 1">
        <input type="checkbox" name="" v-model="reponse.fonctionnalites.tchat" id="">
        <p @click="suivant()">next</p>
      </div>
      <div class="question1" v-show="etape === 2">
        tu veux un tchat? {{reponse.fonctionnalites.tchat}}
        <p @click="suivant()">Suivant</p>
        <p @click="precedent()"> Precedent</p>
      </div>
   </div>
  </transition>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      etape:1,
      reponse:{
        besoin:"",
        fonctionnalites:{
          tchat:false,
          contact:false,
          form:false,
          booking:false
        }
      }
    }
  },
  methods:{
    suivant(){
      this.etape++
    },
    precedent(){
      this.etape--
    }
  }
}
</script>

<style lang="scss">
.slide-enter, .slide-leave-to{
  opacity: 0;
}
.slide-enter-active .slide-leave-active{
  transition: all 1s ease;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
