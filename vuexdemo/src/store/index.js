import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		todos: [
			{id: 1, text: 'one',done: true},
			{id: 2, text: 'one',done: true},
		],
		count: 1
	},
	getters: {
		doneTodos: (state, getters)=>{
			return state.todos.filter(todo=>todo.done);
		}
	},
	//只是同步操作
	mutations: {
		increment(state) {    //this.$store.commit('increment', n);
			state.count++;

		},
		[types.SOME_MUTATION] (state, n) {
			state.count += n
		},
		decrement(state,n) {
			state.count--;
			console.log(n)
		}
	},
	// 为了处理异步操作，让我们来看一看 Action。
	// Action 提交的是 mutation，而不是直接变更状态。
	//Action 可以包含任意异步操作。
	//Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
	//因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
	actions: {
		// decrement(context) {
		// 	context.commit('decrement');
		// },
		// 参数解构
		decrement({commit},n) {
			setTimeout(()=>{
				commit('decrement',n);
			},1000)
			
		}
	}
})


export default store;