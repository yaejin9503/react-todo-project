import { useState } from 'react';
import { useTodoState } from '../Todo/todoProvider';
import styles from './TodoHeader.module.css' 

const TodoHeader = () => {  
  const todoState =  useTodoState(); 
  const [ isOpen, setIsOpen ] = useState(false); 
  const count = todoState.todos.filter(todo => !todo.isCheck).length
  return( 
    <header> 
      <div className={styles.imojiWrap}>
        <button className={styles.imojiBtn} onClick={() => setIsOpen(!isOpen)}>
          <span className={styles.imoji}>😄</span>
        </button>
          <div className={isOpen ? [ styles.imojiTooltip , styles.show].join(' ') : styles.imojiTooltip}>
            <div className={styles.imojiSelect}>
              <span>🥰</span>
            </div>
            <div className={styles.imojiSelect}>
              <span>😡</span>
            </div>
            <div className={styles.imojiSelect}>
              <span>😰</span>
            </div>
            <div>
              <span>🥲</span>
            </div>
          </div>
      </div>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개의 할일
      </h1>
    </header>
  )


}

export default TodoHeader;