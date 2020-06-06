export default {
  namespaced: true, // 默认为 false  getters actions mutations  为全局的  为true则为局部的
  state: {
    userCount: 10
  },
  mutations: {
    addUserCount (state) {
      state.userCount++
    }
  },
  actions: {
    // 如果你希望使用全局 state 和 getter  会通过 context 对象的属性传入 action。
    asyUserC (context) {
      setTimeout(() => {
        context.commit('addUserCount')
        // 调用全局的 mutations/actions 函数  必须添加 第三个参数{root:true}
        context.commit('addCount', null, { root: true })
      }, 2000)
    },
    // 若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler中
    asyUserC1: {
      root: true,
      handler (namespacedContext, payload) { console.log('22222') }
      // 等同于  context.commit('addCount', null, { root: true })
    }
  },
  getters: {
    // 如果你希望使用全局 state 和 getter，rootState 和 rootGetters 会作为第三和第四参数传入 getter，
    pows (state, getters, rootState, rootGetters) {
      return state.userCount + 3
    }
  }
}
