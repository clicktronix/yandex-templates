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

initialTodos.forEach(todoTitle => {
  const templateTodo = `
    <article class="todo-list__item todo">
      <h5 class="todo__title todo__title_theme_dark">${todoTitle}</h5>

      <div class="todo__controls">
        <button type="button" class="todo__control control control_edit" />
        <button type="button" class="todo__control control control_duplicate" />
        <button type="button" class="todo__control control control_remove" />
      </div>
    </article>
  `

  todoList.insertAdjacentHTML("beforeend", templateTodo)
})
