const initialTodos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars',
]

const todoList = document.querySelector(".todo-list")
const todoForm = document.querySelector(".add-todo-form")

function addTodo(todoTitle) {
  const todoElement = document.querySelector(".todo-template").content.cloneNode(true)

  todoElement.querySelector(".todo__title").textContent = todoTitle

  todoList.append(todoElement)
}

todoForm.addEventListener("submit", event => {
  event.preventDefault()

  const todoTitle = todoForm.querySelector(".add-todo-form__field_input").value

  addTodo(todoTitle)

  todoForm.reset()
})

initialTodos.forEach(addTodo)