import { ChangeEvent, FormEvent, FormEventHandler } from 'react';
import { RiChatNewLine } from 'react-icons/ri'; 
import styles from './TodoInput.module.css'; 
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch } from '../Todo/todoProvider';


const TodoInput = () => { 
  const todoDispatch = useTodoDispatch(); 
  const inputDispatch = useInputTodoDispatch(); 
  const inputState = useInputTodoState(); 


  const handleInputChanged = ( event: ChangeEvent<HTMLInputElement> ) => { 
    inputDispatch({ 
      type: 'change', 
      payload: event.target.value
    }); 
    // props.onTextChange(event.target.value); 
  }

  const handleSubmit = ( event: FormEvent) => { 
    event.preventDefault(); 
    todoDispatch({ 
      type:'add',
      payload: { 
        text: inputState.text
      }
    })

  }

  return ( 
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.input} 
               type="text" 
               placeholder={"해야할 Todo"} 
               onChange={handleInputChanged}
               value={inputState.text}
               />
        <button 
          className={styles.enter}
          type="submit"
        >
          <RiChatNewLine/>
        </button>
      </form>
    </section>
  )
}

export default TodoInput; 