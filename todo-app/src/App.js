import './App.css';
import Todos from './components/Todos/Todos';
import AddTodo from './components/AddTodo/AddTodo';
import {Provider} from 'react-redux'
import store from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <AddTodo/>
          <Todos/>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;
