//Action Type Constants:

export const INCREMENT="INCREMENT"
export const DECREMENT="DECREMENT"



//Action Creators: function which is returning action objects type.

export const increment=()=>({
    type: 'INCREMENT'
})
export const decrement=()=>({
    type: 'DECREMENT'
})


/* export const increment=()=>{
  return {
  type: 'INCREMENT'
  }
}
 */
