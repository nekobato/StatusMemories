const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  increment: ({ dispatch }) => dispatch('INCREMENT'),
  decrement: ({ dispatch }) => dispatch('DECREMENT')
}

module.exports = new Vuex.Store({
  state,
  mutations,
  actions
})
