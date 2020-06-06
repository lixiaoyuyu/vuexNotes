import Vue from 'vue'
import Vuex from 'vuex'
import User from './moudels/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    addCount (state, n = 1) {
      state.count += n
    },
    reduceCount (state, n = 1) {
      state.count -= n
    }
  },
  actions: {
    asyAddC (context, n = 1) {
      setTimeout(() => {
        context.commit('addCount', n)
      }, 2000)
    },
    asyReduceC (context, n = 1) {
      setTimeout(() => {
        context.commit('reduceCount', n)
      }, 2000)
    }
  },
  getters: {
    multiple (state) {
      return state.count * 2
    }
  },
  modules: {
    user: User
  }
})
