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

  const eraseBtn = document.createElement('button')
  eraseBtn.classList.add('erase-btn')
  eraseBtn.dataset.trash = generateId
  eraseBtn.innerText = `X`
  todo.appendChild(eraseBtn)

  todoList.appendChild(todo )
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
// todoList.addEventListener('pointerdown', doneTodo)
