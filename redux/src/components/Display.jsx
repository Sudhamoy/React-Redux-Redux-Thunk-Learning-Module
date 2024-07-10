import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { display, hide } from '../actions/show'

function Display() {

  const show=useSelector(store=>store.showReducer.show)
  const dispatch=useDispatch()

  /*
  const handleShow()={
  if(show){
  dispatch(display())
  }
  else{
  dispatch(hide())
  }
}
  */

  return (
    <div className='Display'>
      {show && <h1>I am a React.Js Developer</h1>}
      <button onClick={()=>{show?dispatch(hide()):dispatch(display())}}>{show? 'Hide':'Show'}</button>
    </div>
  )
}

export default Display