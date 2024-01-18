import { useState } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';

export type TodoType = { 
  id: number, 
  text: string, 
  isCheck: boolean
}

function App() {
  const [ text, setText ] = useState("");
  const [ todos, setTodos ] = useState<TodoType[]>([]); 

  const handleSubmit = () => { 
    if(!text) return; 
    setTodos([
      ...todos,
      { 
        id: todos.length + 1, 
        text: text,
        isCheck: false
      }
    ])
  }

  const handleTextChange = (text: string) => { 
    setText(text);
  }

  const handleToggleClick = (id: number) => { 
    const newTodo = todos.map(todo => { 
      if(todo.id === id){ 
        return { 
          ...todo, 
          isCheck: !todo.isCheck
        }
      }
      return todo; 
    })
    setTodos(newTodo); 
  }

  const handleRemoveClick = (id : number) => { 
    const newTodos = todos.filter(todo => { 
      return todo.id !== id 
    })

    setTodos(newTodos); 
  }

  const isCheckedToggleAll = () => { 
    return todos.every(todo => todo.isCheck); 
  }

  const handleToggleAllClick = () => { 
    const isAllChecked = isCheckedToggleAll(); 
    const newTodos = todos.map(todo => { 
      todo.isCheck = !isAllChecked; 
      return todo; 
    })
    setTodos(newTodos); 
  }
  

  const handleRemoveAllClick = () => { 
   setTodos([]);
  }

  return ( 
    <main className="App">
      <TodoHeader count={todos.filter(todo => !todo.isCheck).length}></TodoHeader>
      <TodoInput text={text} onSubmit={handleSubmit} onTextChange={handleTextChange}></TodoInput>
      <TodoListArea todoCount={todos.length}>
        <TodoListTools onToggleAllClick={handleToggleAllClick} onRemoveAllClick={handleRemoveAllClick} isCheckedAll={isCheckedToggleAll()}></TodoListTools>
        <Divider></Divider>
        <TodoList todos={todos} onToggleClick={handleToggleClick} onRemoveClick={handleRemoveClick}></TodoList>
      </TodoListArea>
    </main>
  );
}

export default App;
