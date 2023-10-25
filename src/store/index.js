import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: undefined,
    heroes: []
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user){
      state.currentUser = user
    },
    SET_HEROES(state, heroesData){
      state.heroes = heroesData
    }
  },
  actions: {
    setUser({commit}, user){
      commit('SET_USER', user)
    },
    setHeroes({commit}){
      axios.get('https://heroes-of-the-storm-9c1d1-default-rtdb.firebaseio.com/heroes.json').
      then((response) => {
        commit('SET_HEROES', response.data)
      })
    }
  },
  modules: {
  }
})
