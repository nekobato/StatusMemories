const Vue = require('vue')

const store = require('./vuex/store')

new Vue({
  el: 'body',
  template: require('./template.jade')(),
  store
})
