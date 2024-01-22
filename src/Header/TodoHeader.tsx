import { useTodoState } from '../Todo/todoProvider';
import { TodoType } from '../Todo/todoReducer';
import styles from './TodoHeader.module.css' 

// interface TodoHeaderProps { 
//   count: number
// }


const TodoHeader = () => {  
  const todoState =  useTodoState(); 
  const count = todoState.todos.filter(todo => !todo.isCheck).length
  return( 
    <header> 
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개의 할일
      </h1>
    </header>
  )


}

export default TodoHeader;