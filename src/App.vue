<template>
  <div class="home">
      <div class="content">
      <Accueil v-show="$store.state.etape===0"/>
      <Question1 v-show="$store.state.etape===1"/>
      <!-- Branche CSW  -->
      <cswQuestion2 v-show="$store.state.etape===2 && $store.state.choix==='Création de site web'"/>
      <cswQuestion3 v-show="$store.state.etape===3 && $store.state.choix==='Création de site web'"/>
      <cswQuestion4 v-show="$store.state.etape===4 && $store.state.choix==='Création de site web'"/>
      <cswQuestion5 v-show="$store.state.etape===5 && $store.state.choix==='Création de site web'"/>
      <cswQuestion6 v-show="$store.state.etape===6 && $store.state.choix==='Création de site web'"/>
      <cswQuestion7 v-show="$store.state.etape===7 && $store.state.choix==='Création de site web'"/>
      <!-- Branche graphisme-->
      <graphQuestion2 v-show="$store.state.etape===2 && $store.state.choix==='Graphisme'"/>
      <!-- Branche communication-->
      <commQuestion2 v-show="$store.state.etape===2 && $store.state.choix==='Communication'"/>
      <!-- Résultat -->
      <Resultat v-show="($store.state.etape===8 && $store.state.choix === 'Création de site web') || ($store.state.etape===3 && $store.state.choix === 'Graphisme') || ($store.state.etape===3 && $store.state.choix === 'Communication')"/>
      </div>
      <div class="infos" v-show="$store.state.etape>0">
        <p>Complété à {{$store.state.progress}}%</p>
        <div class="progress-bar">
        <div :style="{width: ($store.state.progress) + '%'}" class="progress"></div>
      </div>
      </div>
  </div>
</template>

<script>
import Accueil from "@/components/accueil.vue"
import Question1 from "@/components/question1.vue"
import cswQuestion2 from "@/components/site/question2.vue"
import cswQuestion3 from "@/components/site/question3.vue"
import cswQuestion4 from "@/components/site/question4.vue"
import cswQuestion5 from "@/components/site/question5.vue"
import cswQuestion6 from "@/components/site/question6.vue"
import cswQuestion7 from "@/components/site/question7.vue"

import graphQuestion2 from "@/components/graphisme/question2.vue"

import commQuestion2 from "@/components/communication/question2.vue"

import Resultat from "@/components/resultat.vue"

export default {
  name: 'App',
  components: {
    Accueil, Question1,cswQuestion2, cswQuestion3, cswQuestion4, cswQuestion5, cswQuestion6, Resultat, cswQuestion7, graphQuestion2, commQuestion2
  },
  data(){
    return{
     
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
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform:translateX(1em)
}
.fade-enter-active .fade-leave-active{
  transition: all .2s ease;
}
$bleu : #2463AA;
$gris : #7A7A7A;

*{
  margin:0;
  padding:0;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.3s ease-in-out;
  color:black;
  text-decoration: none;
  list-style: none;
}
//Global

h1{
  color : $bleu;
}
h2{
  color:$gris;
  margin:20px 0;
  font-size: 1.2em;
}
p{
  margin:10px 0;
}
.content{
  width: 60%;
}
.question{
  width: 100%;
}

.infos{
  position:absolute;
  right:10px;
  bottom:10px;
  .progress-bar{
  
  width:200px;
  height: 10px;
  background-color: #DFDFDF;
  border-radius: 0.5em;
  .progress{
    height: 100%;
    width: 70%;
    border-radius: 0.5em;
    background: linear-gradient(267.47deg, #2463AA -2.66%, #5AC2D8 100%);
  }
}
}


//App

.home{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

//Buttons

.button{
  border:2px solid $bleu;
  border-radius: 0.5em;
  margin-top : 30px;
  display:flex;
  justify-content: center;;
  align-items: center;
  width: 250px;
  height: 60px;
  cursor: pointer;
  p{
    color:$bleu;
    text-align: center;
    width: 100%;
  }
  &:hover{
    background-color:$bleu;
    p{
      color:white;
    }
  }
}

.button-gradient{
  background: linear-gradient(267.11deg, #2463AA 0%, #5AC2D8 100%);
  border:0;
  padding:2px;
  p{
    color:white;
  }
  &:hover{
    transform: scale(1.05);
  }
}

@media(max-width:500px){
  .infos{
    display: none;
  }
  .content{
    width: 80%;
  }
}
</style>
