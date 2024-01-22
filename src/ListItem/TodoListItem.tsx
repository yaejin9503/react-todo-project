import styles from './TodoListItem.module.css';
import {BsCheckCircle} from 'react-icons/bs'; 
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { useTodoDispatch } from '../Todo/todoProvider';

interface TodoItemProps { 
  id: number, 
  text : string,
  isChecked : boolean,
}

const TodoListItem = (props: TodoItemProps) => { 
  const todoDispatch = useTodoDispatch(); 

  const handleToggle = () => { 
    todoDispatch({ 
      type: 'checked', 
      payload: { 
        id: props.id
      }
    })
  }

  const handleRemoveClick = () => { 
    todoDispatch({ 
      type: 'remove', 
      payload: { 
        id: props.id
      }
    })
  }

  return ( 
    <li className={ styles.container }>
      {
        props.isChecked ? 
           <span className={[styles.checkedIcon, styles.checkIcon].join(' ')} onClick={handleToggle}><BsCheckCircle/></span>
        :  <span className={[styles.uncheckedIcon, styles.checkIcon].join(' ')} onClick={handleToggle}><BsCheckCircle/></span>
      }
      <span className={props.isChecked ? styles.lineThrough : ""}>{props.text}</span>
      <span className={styles.removeIcon} onClick={handleRemoveClick}><IoIosRemoveCircleOutline/> </span>
    </li>
  )
}

export default TodoListItem;