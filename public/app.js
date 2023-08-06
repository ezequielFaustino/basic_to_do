import * as localStorage from './local-storage.js'

const form = document.querySelector('[data-js="form"]')
const todoInput = document.querySelector('[data-js="todo-input"]')
const todoList = document.querySelector('.list')

const addTodo = event  => {
  event.preventDefault()

  const inputValue = todoInput.value.trim()

  if (!inputValue.length) {
    alert('Informe o nome da tarefa')
    return
  }

  const generateId = getRandomId()

  const todo = document.createElement('div')
  todo.classList.add('todo')
  todo.dataset.id = generateId

  const item = document.createElement('h4')
  item.classList.add('item')
  item.innerText = inputValue
  todo.appendChild(item)

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('done-btn')
  doneBtn.innerHTML = `<i class="fa-sharp fa-solid fa-check"></i>`
  todo.appendChild(doneBtn)

  const eraseBtn = document.createElement('button')
  eraseBtn.classList.add('erase-btn')
  eraseBtn.dataset.trash = generateId
  eraseBtn.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`
  todo.appendChild(eraseBtn)

  todoList.appendChild(todo)

  todoInput.value = ''
  todoInput.focus()
}

const doneTodo = element => {
  const elTarget = element.target
  const targetClosestEl = elTarget.closest('div')
  
  const doneWasClicked = elTarget.classList.contains('done-btn')
  if(doneWasClicked) {
    targetClosestEl.classList.toggle('done')
  }
}


const removeTodo = event => {
  const trashWasClicked = event.target.dataset.trash
  
  if(trashWasClicked) {
    const todo = document.querySelector(`[data-id="${trashWasClicked}"]`)
    todo.remove()
  }
}

const getRandomId = () => Math.round(Math.random() * 1000)


form.addEventListener('submit', addTodo)
todoList.addEventListener('pointerdown', removeTodo)
todoList.addEventListener('pointerdown', doneTodo)
