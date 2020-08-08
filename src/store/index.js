import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* Mode = 1 -> Doctor, Mode = 2 -> Patient */
  
  state: {
    mode: 1,
    contacts: [{
      avatar: 'stock-16.jpg',
      name: 'Jean Kowalski'
    },
    {
      avatar: 'stock-17.jpg',
      name: 'Lisa McCleod'
    },
    {
      avatar: 'stock-18.jpg',
      name: 'Michelle Gonzalez'
    },
    {
      avatar: 'stock-19.jpg',
      name: 'Lia Preobrazhensky'
    },
    {
      avatar: 'stock-20.jpg',
      name: 'Pamon Rorras'
    }
],
  },
  mutations: {
    setMode(state,mode){
      state.mode = mode;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
