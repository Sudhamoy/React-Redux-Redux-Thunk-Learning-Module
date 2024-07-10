import { ADDTODO, DELETETODO } from "../actions/todos"

const initialState={
  todos:[]
}


const reducer=(state=initialState,action)=>{

  switch(action.type){
    case ADDTODO:
      return {
        ...state,
        todos:[]
      }

    case DELETETODO:
      return {
        ...state,
        todos:[]
      }

    default:
      return state
  }
}

export default reducer