const todoForm = document.querySelector('[data-js="todo-container"]')
const todoInput = document.querySelector('[data-js="todo-input"]')
const todoList = document.querySelector('.list')
const searchInput = document.querySelector('[data-js="search-input"]')
const warningItem = document.querySelector('[data-js="warning-item"]')


const renderTodoList = todo => {

  const task = document.createElement('div')
  task.classList.add('todo')
  task.classList.add('w-2/3')
  task.classList.add('sm:w-5/6')
  task.classList.add('flex')
  task.dataset.id = todo.id

  const item = document.createElement('h4')
  item.classList.add('item')
  item.textContent = `${todo.value}`
  task.appendChild(item)

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('done-btn')
  doneBtn.innerHTML = `<i class="fa-sharp fa-solid fa-check"></i>`
  task.appendChild(doneBtn)

  const eraseBtn = document.createElement('button')
  eraseBtn.classList.add('erase-btn')
  eraseBtn.dataset.trash = todo.id
  eraseBtn.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`
  task.appendChild(eraseBtn)

  todoList.append(task)
}

const getLocalStorage = JSON.parse(localStorage.getItem('todos'))

let todos = localStorage
  .getItem('todos') !== null ? getLocalStorage : []

const removeFromArray = ID => {
  todos = todos.filter(({id}) => id !== ID)
  updateLocalStorage()
  init()
}

const addTodoToArray = (id, value) => {
  todos.push({
    id,
    value
  })
}

const doneTodo = element => {
  const elTarget = element.target
  const targetClosestEl = elTarget.closest('div')

  const doneWasClicked = elTarget.classList.contains('done-btn')
  if (doneWasClicked) {
    targetClosestEl.classList.toggle('done')
  }
}

const removeTodo = event => {
  const trashWasClicked = event.target.dataset.trash
  const itemId = Number(trashWasClicked)
  
  if (trashWasClicked) {
    removeFromArray(itemId)
  }
}

const searchTodo = event => {
  event.preventDefault()

  const searchValue = event.target.value.toLowerCase().trim()
  const todos = Array.from(todoList.children).map(todo => ({
    todo,
    shouldBeVisible: todo.textContent.toLowerCase().includes(searchValue)
  }))

  todos.forEach(({ todo, shouldBeVisible }) => {
    todo.classList.add(shouldBeVisible ? 'flex' : 'hidden')
    todo.classList.remove(shouldBeVisible ? 'hidden' : 'flex')
  })
}

const updateLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const init = () => {
  todoList.innerHTML = ''
  todos.forEach(renderTodoList)
}

init()

const getRandomId = () => Math.round(Math.random() * 1000)

todoForm.addEventListener('submit', event => {
  event.preventDefault()

  const todoId = getRandomId()
  const inputValue = todoInput.value.trim()

  if (!inputValue.length) {
    warningItem.classList.remove('hidden')
    setTimeout(() => {
      warningItem.classList.add('hidden')
    }, 3000)
    return
  }

  addTodoToArray(todoId, inputValue)
  updateLocalStorage()
  init()

  todoInput.value = ''
  todoInput.focus()

})

todoList.addEventListener('pointerdown', removeTodo)
todoList.addEventListener('pointerdown', doneTodo)
searchInput.addEventListener('input', searchTodo)


