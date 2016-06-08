const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

module.exports = new Vuex.Store({
  strict: debug
})
