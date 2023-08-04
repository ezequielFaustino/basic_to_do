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


const removeTodo = event => {
  const targetEl = event.target
  const parentEl = targetEl.closest('div')
  const isEraseBtnEl = targetEl.classList.contains('erase-btn')

  if(isEraseBtnEl) {
    parentEl.remove()
  }

}


handleFormSubmit = event => {
  event.preventDefault()

  const inputValue = todoInput.value.trim()
  
  if(!inputValue.length) {
    alert('Informe o nome da tarefa')
    return
  }

  saveTodo(inputValue)
}

form.addEventListener('submit', handleFormSubmit)
todoList.addEventListener('pointerdown', removeTodo)