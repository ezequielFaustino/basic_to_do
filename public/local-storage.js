export const getLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || []
  
  return todos
} 

export const save = value => {
  const todos = getLocalStorage()

  todos.push(value)

  localStorage.setItem('todos', JSON.stringify(todos))
}