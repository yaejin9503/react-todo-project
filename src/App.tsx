import { useReducer } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import TodoProvider from './Todo/todoProvider';

function App() {

  return ( 
    <main className="App">
      <TodoProvider>
        <TodoHeader></TodoHeader>
        <TodoInput></TodoInput>
        <TodoListArea >
          <TodoListTools></TodoListTools>
          <Divider></Divider>
          <TodoList></TodoList>
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
