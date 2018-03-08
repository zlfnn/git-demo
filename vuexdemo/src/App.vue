<template>
  <div id="app">
    <!-- <div @click="increment">{{count}}</div> -->
    <div @click="decrement">{{count}}</div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    // console.log(this.$store.getters.doneTodos);  
    // this.$store.state.count;
  },
  computed: {
    ...mapState([
      'todos',
      'count'
    ]),
    ...mapGetters([
      'doneTodos'
    ])
  },
  methods: {
    // increment() {
    //   // this.$store.commit('increment', 2);
    //   this.$store.commit('SOME_MUTATION', 1);
    //   // 
    // },
    // decrement() {
    //   this.$store.dispatch('decrement',10);//actions分发
    // },
    ...mapMutations([
      'increment',  //`this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
    ...mapActions([
      'decrement'
    ])

  }
 
}
</script>

<style>

</style>
