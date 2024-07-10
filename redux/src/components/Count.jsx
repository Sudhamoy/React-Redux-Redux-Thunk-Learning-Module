import React, {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from '../actions/count'

function Count() {

  const count=useSelector(store=>store.countReducer.count)
  const dispatch=useDispatch()

  return (
    <div>
      <p style={{fontSize:'10em',margin:'10px auto'}}>{count}</p>
      <button onClick={()=>dispatch(increment(count+1))}>Increment</button>&nbsp;
      <button onClick={()=>dispatch(decrement(count-1))}>Decrement</button>
    </div>
  )
}

export default Count
