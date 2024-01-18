import { ChangeEvent, FormEvent, FormEventHandler } from 'react';
import { RiChatNewLine } from 'react-icons/ri'; 
import styles from './TodoInput.module.css'; 

interface TodoInputProps { 
  text : string
  onTextChange: (text:string) => void
  onSubmit: () => void
}

const TodoInput = (props: TodoInputProps) => { 

  const handleInputChanged = ( event: ChangeEvent<HTMLInputElement> ) => { 
    props.onTextChange(event.target.value); 
  }

  const handleSubmit = ( event: FormEvent) => { 
    event.preventDefault(); 
    props.onSubmit()
  }

  return ( 
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.input} 
               type="text" 
               placeholder={"해야할 Todo"} 
               onChange={handleInputChanged}
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