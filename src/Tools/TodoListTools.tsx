import styles from './TodoListTools.module.css'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'

interface TodoListToolsProps { 
  onToggleAllClick: () => void
  onRemoveAllClick: () => void
  isCheckedAll: boolean 
}

const TodoListTools = (props: TodoListToolsProps) => { 

  const handleToggleAllClick = () => { 
    props.onToggleAllClick()
  }

  const handleRemoveAllClick = () => { 
    props.onRemoveAllClick();
  }

  return( 
    <section className={styles.container}>
      <button className={styles.button} onClick={handleToggleAllClick}>
        { 
          props.isCheckedAll ? 
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