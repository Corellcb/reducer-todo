import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import { reducer, initialState } from './reducers/TodoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList list={state.todoList} dispatch={dispatch} />
    </div>
  );
}

export default App;