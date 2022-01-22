const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list div");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const liTag = e.target.parentElement;

  toDos = toDos.filter((todo) => {
    return parseInt(liTag.id) !== todo.id;
  });
  liTag.remove();
  saveToDos();
}

function paintToDo(newToDoObj) {
  const liTag = document.createElement("li");
  liTag.id = newToDoObj.id;
  liTag.classList.add("todo-align");
  const btnTag = document.createElement("button");
  const spanTag = document.createElement("span");

  spanTag.innerText = newToDoObj.text;
  btnTag.innerText = "❌";
  btnTag.classList.add("btnTodo");
  btnTag.addEventListener("click", deleteToDo);
  liTag.appendChild(btnTag);
  liTag.appendChild(spanTag);

  toDoList.appendChild(liTag);
}

function handleToDoSubmit(e) {
  e.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);

  paintToDo(newToDoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach((todo) => {
    paintToDo(todo);
  });
}
