import { createStore } from 'vuex'

export default createStore({
  state: {
    choix:"?",
    etape:0,
    progress:0,
    prix:0,
    site:{
      type:"",
      contenu:"",
      stats:"",
      fonctions:{
        chat:false,
        contact:false,
        form:false,
        booking:false
      },
      logo:"",
      domain:""
    }
  },
  mutations: {
    suivant(){
      this.state.etape++
    }
  },
  actions: {
  },
  modules: {
  }
})
