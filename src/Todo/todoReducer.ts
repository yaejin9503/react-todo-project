import { saveTodos } from "./todoStorage";

export type TodoType = { 
  id: number, 
  text: string, 
  isCheck: boolean
}

export type TodoStateType ={
  todos: TodoType[]; 
}

export type TodoActionType = {
  type: 'add'
  payload: {
    text: string
  }
} | {
  type: 'remove',
  payload: {
    id: number
  }
} | {
  type: 'checked',
  payload: {
    id: number
  }
} | { 
  type: 'allChecked'
  payload: boolean
} | { 
  type: 'allRemove'
}


export const initialTodoState = {
  todos: []
};

export const todoReducer = (state: TodoStateType, action:TodoActionType) => { 
  switch(action.type){ 
    case 'add':{
      const newTodos = state.todos.concat({
        id: Date.now(),
        text: action.payload.text,
        isCheck: false
      })
      saveTodos(newTodos); 
      return {
        todos: newTodos
      }
    }
    case 'remove': {
      const newTodos = state.todos.filter(todo => { 
        return todo.id !== action.payload.id 
      }); 
      saveTodos(newTodos); 
      return { 
        todos : newTodos
      }
    }
    case 'checked': { 
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isCheck: !todo.isCheck
          }
        }
        return todo
      });
      saveTodos(newTodos); 
      return {
        todos: newTodos
      }
    }
    case 'allChecked': { 
      const newTodos = state.todos.map(todo => { 
        todo.isCheck = !action.payload; 
        return todo; 
      })
      saveTodos(newTodos); 
      return { 
        todos : newTodos
      }
    }
    case 'allRemove': { 
      saveTodos([]); 
      return { 
        todos : []
      }
    }
  }
}
