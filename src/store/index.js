import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authenticated: false,
    token: ''
  },
  mutations: {
    setToken (state, token) { // o primeiro parametro de todas as mutations é o "state"
      state.token = token
    }
  }
})