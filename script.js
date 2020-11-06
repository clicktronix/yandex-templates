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



document.addEventListener("click", event => {
  const target = event.target

  if (target.classList.contains("control_remove")) {
    const todo = event.target.closest(".todo")

    todo.remove()
  } else if (target.classList.contains("control_edit")) {
    const todo = event.target.closest(".todo")
    const todoTitle = todo.querySelector(".todo__title").textContent

    todoForm.querySelector(".add-todo-form__field_input").value = todoTitle

    todo.classList.add("is-edit")
  } else if (target.classList.contains("control_duplicate")) {
    const todo = event.target.closest(".todo")
    const duplicatedTitle = todo.querySelector(".todo__title").textContent

    addTodo(duplicatedTitle)
  }
})



todoForm.addEventListener("submit", event => {
  event.preventDefault()

  const todoTitle = todoForm.querySelector(".add-todo-form__field_input").value
  const editableTodo = document.querySelector(".is-edit")

  if (editableTodo) {
    editableTodo.querySelector(".todo__title").textContent = todoTitle

    editableTodo.classList.remove("is-edit")
  } else {
    addTodo(todoTitle)
  }

  todoForm.reset()
})

initialTodos.forEach(addTodo)