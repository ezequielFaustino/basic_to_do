const form = document.querySelector('[data-js="form"]') 
const todoInput = document.querySelector('[data-js="todo-input"]')
const todoList = document.querySelector('.list')

const saveTodo = text => {
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const item = document.createElement('h3')
  item.classList.add('item')
  todo.textContent = text
  todo.appendChild(item)

  const eraseBtn = document.createElement('button')
  eraseBtn.classList.add('erase-btn')
  eraseBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
  todo.appendChild(eraseBtn)

  todoList.appendChild(todo)

  todoInput.value = ''
}

handleFormSubmit = event => {
  event.preventDefault()

  const inputValue = todoInput.value
  saveTodo(inputValue)

}

form.addEventListener('submit', handleFormSubmit)