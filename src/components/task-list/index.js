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
      if (!e.target[0].value) return
      this.addTodo(e.target[0].value)
    }
  }
}
