import { useReducer } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import { todoInputReducer } from './Todo/todoInpuReducer';
import { todoReducer } from './Todo/todoReducer';

function App() {
  const [ inputState, inputDispatch ] = useReducer(todoInputReducer, { text : ''});
  const [ todosState, todoDispatch ] = useReducer(todoReducer, { todos : []}); 

  const handleSubmit = () => { 
    if(!inputState) return; 

    todoDispatch({ 
      type: 'add', 
      payload: { 
        text: inputState.text
      }
    })
    inputDispatch({ 
      type: 'clear'
    })
  }

  const handleTextChange = (text: string) => { 
    // setText(text);
    inputDispatch({ 
      type: 'change', 
      payload : text
    })
  }

  const handleToggleClick = (id: number) => { 
    todoDispatch({ 
      type: 'checked', 
      payload: { 
        id: id
      }
    })
  }

  const handleRemoveClick = (id : number) => { 
    todoDispatch({ 
      type: 'remove', 
      payload: { 
        id: id
      }
    })
  }

  const isCheckedToggleAll = () => { 
    return todosState.todos.every(todo => todo.isCheck); 
  }

  const handleToggleAllClick = () => { 
    todoDispatch({ 
      type: 'allChecked', 
      payload: isCheckedToggleAll()
    })
  }
  

  const handleRemoveAllClick = () => { 
    todoDispatch({ 
      type: 'allRemove'
    })
  }

  return ( 
    <main className="App">
      <TodoHeader count={todosState.todos.filter((todo: { isCheck: boolean; }) => !todo.isCheck).length}></TodoHeader>
      <TodoInput text={inputState.text} onSubmit={handleSubmit} onTextChange={handleTextChange}></TodoInput>
      <TodoListArea todoCount={todosState.todos.length}>
        <TodoListTools onToggleAllClick={handleToggleAllClick} onRemoveAllClick={handleRemoveAllClick} isCheckedAll={isCheckedToggleAll()}></TodoListTools>
        <Divider></Divider>
        <TodoList todos={todosState.todos} onToggleClick={handleToggleClick} onRemoveClick={handleRemoveClick}></TodoList>
      </TodoListArea>
    </main>
  );
}

export default App;
