import { combineReducers } from 'redux'

let todos = [
  { id: 1, content: "hello1", completed: false },
  { id: 2, content: "hello2", completed: false }
]

function todosReducer(state=todos, action) {
  switch (action.type) {
    case 'COMPLETE':
      console.log(action.type, action.index)
      const i = action.index
      return [...state.slice(0,i), { ...state[i], completed: true }, ...state.slice(i + 1)]
    case 'ADD_TODO':
      return [
        ...state, {
          id: state.length + 1,
          content: action.content,
          completed: false
        }
      ]
    default:
      return state
  }
}

function visibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log(action.filter)
      return action.filter
    default:
      return state
  }
}

let rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export default rootReducer
