const Vue = require('vue')

const store = require('./store')

new Vue({
  el: 'body',
  template: require('./template.jade'),
  store
})
