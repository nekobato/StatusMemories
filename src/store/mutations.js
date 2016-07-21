import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.ADD_TODO] (state, todo) {
    state.todos.push(todo)
  }
}
