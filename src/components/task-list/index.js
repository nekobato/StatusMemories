import { addTodo } from 'store/actions'

export default {
  template: require('./template.jade')(),
  vuex: {
    getters: {
      todos: ({todos}) => todos
    },
    actions: {
      addTodo
    }
  },
  data () {
    return {
      styles: require('./style.styl')
    }
  },
  methods: {
    onSubmit (e) {
      this.addTodo('hoge')
    }
  }
}
