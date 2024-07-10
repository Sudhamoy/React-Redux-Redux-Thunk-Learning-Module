export const ADDTODO="ADDTODO"
export const DELETETODO="DELETETODO"

export const addTodo=(newTodo)=>({
  type: ADDTODO,
  payload:newTodo
})
export const deleteTodo=(todoIndex)=>({
  type: DELETETODO,
  payload:todoIndex
})