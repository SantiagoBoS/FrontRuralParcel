import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    territorios: []
    
  },
  mutations: {
    pushTerritorio(state, obj){
      state.territorios.push(obj);
    }

  },
  actions: {
    
    async registrarTerritorio({commit}, objTerritorio){
      console.log('objterritorio.. '+objTerritorio);
      //POST
      const peticion = await fetch('http://localhost:3000/territory', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(objTerritorio)
      });
      const data = await peticion.json();
      commit('pushTerritorio', data);
      console.log(data);
    }
    
  },
  modules: {
  }
})

