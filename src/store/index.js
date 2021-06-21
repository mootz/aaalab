import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    closeAllPopups ({ commit }) {
      // all commits for close popups
    }
  },
  modules
})
