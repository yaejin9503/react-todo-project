import { TodoType } from '../App';
import TodoListItem from '../ListItem/TodoListItem';
import styles from './TodoList.module.css'; 

interface TodoListProps { 
  todos: TodoType[]
  onToggleClick: (id:number) => void
  onRemoveClick:(id: number) => void
}
const TodoList = (props: TodoListProps) => { 
  return ( 
    <section>
      <ol className={styles.olContainer}>
        {
          props.todos.map((todo) => { 
            return <TodoListItem 
                    id={todo.id}
                    key={`${todo.id}`} 
                    text={todo.text} 
                    isChecked={todo.isCheck}
                    onToggleClick={props.onToggleClick} 
                    onRemoveClick={props.onRemoveClick}
                    /> 
          })
        }
      </ol>
    </section>
  )
}

export default TodoList 