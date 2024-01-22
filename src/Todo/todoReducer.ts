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
    case 'add':
      return {
        todos: state.todos.concat({
          id: Date.now(),
          text: action.payload.text,
          isCheck: false
        })
      };
    case 'remove': 
      return { 
        todos : state.todos.filter(todo => { 
          return todo.id !== action.payload.id 
        })
      }
    case 'checked':
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isCheck: !todo.isCheck
            }
          }
          return todo
        })
      };
    case 'allChecked':
      return { 
        todos : state.todos.map(todo => { 
          todo.isCheck = !action.payload; 
          return todo; 
        })
      }
    case 'allRemove': 
      return { 
        todos : []
      }
  }
}
