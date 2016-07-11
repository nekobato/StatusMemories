import Vue from 'vue'
import store from './store'

new Vue({
  el: 'body',
  replace: false,
  template: require('./template.jade')(),
  store,
  components: {
    'task-list': require('./components/task-list')
  }
})
