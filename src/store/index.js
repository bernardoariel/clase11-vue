import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarioActivo:null,
    listaUsuarios:[
      {
        nombre:"titi",
        password:"112233"
      }
    ]
  },
  getters: {
    getUsuActivo(state){
      return state.usuarioActivo
    }
  },
  mutations: {
    modificarUsuActivo(state, nuevoUsuario){
      state.usuarioActivo = nuevoUsuario
    }
  },
  actions: {
  },
  modules: {
  }
})
