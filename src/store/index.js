import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* Mode = 1 -> Doctor, Mode = 2 -> Patient */
  
  state: {
    mode: 1
  },
  mutations: {
    setMode(state,mode){
      state.mode = mode;
    }
  },
  actions: {
  },
  modules: {
  }
})
