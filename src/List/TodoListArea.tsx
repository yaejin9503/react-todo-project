import { ReactNode } from "react"
import { useTodoState } from "../Todo/todoProvider";

interface TodoListAreaProps{ 
  children : ReactNode,
  // todoCount: number
}

const TodoListArea = (props : TodoListAreaProps) => { 
  const todoState = useTodoState(); 
  if(todoState.todos.length < 1){ 
    return null; 
  }

  return ( 
    <>
      {props.children}
    </>
  )
}

export default TodoListArea; 