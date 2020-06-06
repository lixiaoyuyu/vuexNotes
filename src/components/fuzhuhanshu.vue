<!-- 辅助函数   -->
<template>
  <div>
       <button class="add" @click="asyAdd">异步+</button>
      <button class="add" @click="add">+</button>
      {{count}}==={{flage?powsCount:''}}==={{multiple}}
      <button class="reduce" @click="reduce">-</button>
       <button class="reduce" @click="asyReduce">异步-</button>

      </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      flage: false
    }
  },
  computed: {
    // 1.数组
    ...mapState(['count']),
    // 2. 对象
    // ...mapState({
    //   counts: 'count',
    //   powsCount (state) {
    //     return state.count ** 2
    //   }
    // }),
    ...mapGetters(['multiple'])
  },
  methods: {
    // 1. 数组
    ...mapMutations(['addCount', 'reduceCount']),
    // 2. 对象
    // ...mapMutations({
    //   adds: 'addCount'
    // }),
    ...mapActions(['asyAddC', 'asyReduceC']),
    add () {
      this.addCount()
      //   this.adds()
      console.log(1111)
    },
    reduce () {
      this.reduceCount()
      console.log(2222)
    },
    asyAdd () {
      this.asyAddC()
    },
    asyReduce () {
      this.asyReduceC()
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
