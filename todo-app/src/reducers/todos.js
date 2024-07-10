import { ADDTODO, DELETETODO } from "../actions/todos"

const initialState={
  todos:[
    "Revise Advanced Javascript",
    "Go for a 30 mins walk",
    "Revise Pseudo class selectors in CSS",
  ]
}


const reducer=(state=initialState , action)=>{

  switch(action.type){
    case ADDTODO:
      return {
        ...state,
        todos:[...state.todos , action.payload]
      }

    case DELETETODO:
      const newTodos = state.todos.filter((todo,index)=> index !== action.payload)
      return {
        ...state,
        todos: newTodos
      }

    default:
      return state
  }
}

export default reducer