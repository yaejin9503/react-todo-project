import styles from './TodoListTools.module.css'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { useTodoDispatch, useTodoState } from '../Todo/todoProvider'


const TodoListTools = () => { 
  const todoState = useTodoState(); 
  const todoDispatch = useTodoDispatch(); 


  const isCheckedToggleAll = () =>{ 
    return todoState.todos.every(todo => todo.isCheck); 
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

  return( 
    <section className={styles.container}>
      <button className={styles.button} onClick={handleToggleAllClick}>
        { 
          isCheckedToggleAll() ? 
          <span className={[styles.checkAllIcon, styles.checkAllIsActive].join(' ')}><IoCheckmarkDoneCircleOutline/>&nbsp;전체 완료</span>
          : 
          <span className={[styles.checkAllIcon, styles.checkAllIsNotActive].join(' ')}><IoCheckmarkDoneCircleOutline/>&nbsp;전체 완료</span>
        }
      </button>
      <button className={[styles.button, styles.removeAllButton].join(' ')} onClick={handleRemoveAllClick}>
        <span className={styles.removeAllIcon}><MdDelete/>&nbsp;전체 삭제</span>
      </button>
    </section>
  )
}

export default TodoListTools