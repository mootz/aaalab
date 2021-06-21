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
      commit('[home] CLOSE_TILES_MODAL')
    }
  },
  modules
})
