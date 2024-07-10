import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import countReducer from '../reducers/count'  /* reducer function name can be anything */
import showReducer from '../reducers/show'

//For mutiple reducer:
const reducer= combineReducers({
  countReducer,
  showReducer
})

const store=createStore(reducer, composeWithDevTools())

export default store


/*
(1) Package:
https://www.npmjs.com/package/@redux-devtools/extension


(2) //Structure of reducer:
reducer={
countReducer:{
  count:0
  },
showReducer:{
  show:false
  }
}

(3) Syntax to create central state/store:
  const store=createStore(reducer function, composeWithDevTools())
*/