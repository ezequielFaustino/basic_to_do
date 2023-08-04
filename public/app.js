import * as localStorage from './local-storage.js' 

const form = document.querySelector('[data-js="form"]') 
const todoInput = document.querySelector('[data-js="todo-input"]')
const todoList = document.querySelector('.list')

const saveTodo = (text, done = 0, save = 1) => {
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const item = document.createElement('h3')
  item.classList.add('item')
  todo.textContent = text
  todo.appendChild(item)

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('done-btn')
  doneBtn.innerHTML = `<i class="fa-sharp fa-solid fa-check"></i>`
  todo.appendChild(doneBtn)

  const eraseBtn = document.createElement('button')
  eraseBtn.classList.add('erase-btn')
  eraseBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
  todo.appendChild(eraseBtn)

  if(done) {
    todo.classList.add('done')
  }

  if(save) {
    localStorage.save({text, done})
  }

  todoList.appendChild(todo)

  todoInput.value = ''
}

const doneTodo = event => {
  const targetEl = event.target
  const isDoneBtnEl = targetEl.classList.contains('done-btn')
  const parentEl = targetEl.closest('div')

  if(isDoneBtnEl) {
    parentEl.classList.toggle('done')
  }
}

const removeTodo = event => {
  const targetEl = event.target
  const parentEl = targetEl.closest('div')
  const isEraseBtnEl = targetEl.classList.contains('erase-btn')

  if(isEraseBtnEl) {
    parentEl.remove()
  }

}

const load = () => {
  const todos  = localStorage.getLocalStorage()

  todos.forEach(todo => {
    saveTodo(todo.text, todo.done, 0)
  })
}


const handleFormSubmit = event => {
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
todoList.addEventListener('pointerdown', doneTodo)


load()