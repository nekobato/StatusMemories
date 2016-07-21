import Vue from 'vue'
import store from './store'

console.log(store)

require('materialize-css/dist/css/materialize.css')
require('materialize-css/dist/js/materialize.js')
require('material-design-icons/iconfont/material-icons.css')
require('./style.styl')

const debug = process.env.NODE_ENV !== 'production'

Vue.config.devtools = debug

new Vue({
  el: 'body',
  replace: false,
  template: require('./template.jade')(),
  store,
  components: {
    'task-list': require('./components/task-list')
  }
})
