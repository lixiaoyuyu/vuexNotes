<!-- 模块的命名空间辅助函数   -->
<template>
  <div>
       <button class="add" @click="asyAdd">异步+</button>
      <button class="add" @click="add">+</button>
      {{userCount}}|{{$store.state.count}}|==={{flage?powsCount:''}}==={{pows}}||

      </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions, mapGetters } = createNamespacedHelpers('user')
export default {
  data () {
    return {
      flage: false
    }
  },
  computed: {
    // 1.数组
    // ...mapState({
    //   userCount: state => {
    //     console.log(state)
    //     return state.userCount
    //   }, // 局部的
    //   count: 'count' // 全局的
    // }),
    // ...mapState({
    //   userCount: state => state.userCount
    // }),
    ...mapState(['userCount']),
    // 2. 对象
    // ...mapState({
    //   counts: 'count',
    //   powsCount (state) {
    //     return state.count ** 2
    //   }
    // }),
    // ...mapGetters('user', ['pows']),
    // ...mapGetters(['multiple'])
    ...mapGetters(['pows'])
  },
  methods: {
    // 1. 数组
    // ...mapMutations(['addCount', 'user/addUserCount']),
    // 2. 对象
    // ...mapMutations({
    //   adds: 'addCount',
    //   foo: 'user/addUserCount'
    // }),
    //  适用于模块
    ...mapMutations(['addUserCount']),

    ...mapActions(['asyUserC']),
    add () {
    //   this.addCount()
    //   this['user/addUserCount']()
    //   this.adds()
    //   this.foo()
      this.addUserCount()
      console.log(this)
    },
    asyAdd () {
    //   this.asyAddC()
    //   this['user/asyUserC']()
      this.asyUserC()
    }
  }
}
</script>
<style>
button {
    font-size: 25px;
    font-weight: 700;
    color: aqua;
    border:  none;
    width: 80px;
    outline: none;
    cursor: pointer;
}
button.add {
    margin-right: 10px;
}
button.reduce {
 margin-left: 10px;
}
</style>
