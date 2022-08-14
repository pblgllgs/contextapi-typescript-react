import * as React from 'react';
import TodoProvider from './context/todoContext';
import AddTodo from './components/AddTodo';
import './App.css';
import Todos from './containers/Todos';

export default function App() {
  return (
    <TodoProvider>
      <main className="App">
        <h1>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  );
}
