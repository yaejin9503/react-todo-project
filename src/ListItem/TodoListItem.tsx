import styles from './TodoListItem.module.css';
import {BsCheckCircle} from 'react-icons/bs'; 
import { IoIosRemoveCircleOutline } from 'react-icons/io'

interface TodoItemProps { 
  id: number, 
  text : string,
  isChecked : boolean,
  onToggleClick: (id:number) => void
  onRemoveClick:(id: number) => void
}

const TodoListItem = (props: TodoItemProps) => { 

  const handleToggle = () => { 
    props.onToggleClick(props.id); 
  }

  const handleRemoveClick = () => { 
    props.onRemoveClick(props.id); 
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