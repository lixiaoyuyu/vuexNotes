<!-- this.$store   -->
<template>
  <div>
       <button class="add" @click="asyAdd">异步+</button>
      <button class="add" @click="add">+</button>
      {{$store.state.count}}==={{$store.getters.multiple}}
      <button class="reduce" @click="reduce">-</button>
       <button class="reduce" @click="asyReduce">异步-</button>

      </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    add () {
    // 1. 传值
      this.$store.commit('addCount')
      //   this.$store.commit('addCount', 2)
      // 2. 对象方式  mutations 接收的参数是个对象
      //   this.$store.commit({ type: 'addCount', amount: 2 })
      console.log(1111)
    },
    reduce () {
      console.log(2222)
      this.$store.commit('reduceCount')
    },
    asyAdd () {
    // 1. 字符串形式
      this.$store.dispatch('asyAddC')
      //   this.$store.dispatch('asyAddC', 3)
      // 2. 对象形式    ations 接收的参数是个对象
    //   this.$store.dispatch({
    //     type: 'asyAddC',
    //     amount: 3
    //   })
    },
    asyReduce () {
      this.$store.dispatch('asyReduceC')
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
