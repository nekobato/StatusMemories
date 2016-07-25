import * as types from './mutation-types'

export const addTodo = ({ dispatch }, todo) => {
  dispatch(types.ADD_TODO, todo)
}
