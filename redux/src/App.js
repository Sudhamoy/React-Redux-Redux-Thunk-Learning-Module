import './App.css';
import Count from './components/Count';
import Display from './components/Display';
import { Provider } from 'react-redux';
import store from './store/site'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Count/>
        <Display/>
      </div>
    </Provider>
    
  );
}

export default App;

/*
1: Wrap up all the codes in Provider in App.js
//Provider--> An HOC component from react-redux

2: Subscribe the component using "useSelector" hook from react-redux

3: Then dispatch the "Action creators" from action file using "useDispatch"

4: Create store(central state) using "createStore(<Reducer function>)" from redux

5: Use of reducer function:
  -state store
  -logic for state change
  -actions

6: In action file:
  -use of action creators
  -use of action type constants(Industry standards)
*/
