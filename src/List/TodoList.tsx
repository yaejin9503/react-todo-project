import TodoListItem from '../ListItem/TodoListItem';
import styles from './TodoList.module.css'; 
import { useTodoState } from '../Todo/todoProvider';


const TodoList = () => { 
  const todoState = useTodoState(); 
  
  return ( 
    <section>
      <ol className={styles.olContainer}>
        {
          todoState.todos.map((todo) => { 
            return <TodoListItem 
                    id={todo.id}
                    key={`${todo.id}`} 
                    text={todo.text} 
                    isChecked={todo.isCheck}
                    /> 
          })
        }
      </ol>
    </section>
  )
}

export default TodoList 