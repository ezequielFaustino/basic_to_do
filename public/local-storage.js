export const getLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || []
  
  return todos
} 

export const save = value => {
  const todos = getLocalStorage()

  todos.push(value)

  localStorage.setItem('todos', JSON.stringify(todos))
}

export const remove = todoText => {
  const todos = getLocalStorage()

  const filteredTodos = todos.filter(todo => todo.text !== todoText)

  localStorage.setItem('todos', JSON.stringify(filteredTodos))
}