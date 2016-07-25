import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import plugins from './plugins'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export const STORAGE_KEY = 'symchokit-todos'

export default new Vuex.Store({
  strict: debug,
  state: {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  mutations: mutations,
  plugins
})
