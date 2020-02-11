import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const USER_KEY = 'hm-toutiao-m-user'

export default new Vuex.Store({
  state: {
    uesr: JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },
  mutations: {
    updateUser: function (state, data) {
      state.user = data
      localStorage.setItem(USER_KEY, JSON.stringify(data))
    },
    clearUser: function (state) {
      state.user = {}
      localStorage.removeItem(USER_KEY)
    }
  },
  actions: {

  },
  modules: {

  }
})
