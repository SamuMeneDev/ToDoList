const btnAdd = document.querySelector("#addTask");
const listaEl = document.querySelector("#list");
const inputEl = document.querySelector("#input");
let tasks = [
  {
    id: 1,
    title: "Jogar bola",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Estudar Javascript",
    isCompleted: false,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  updateList();
});
function updateList() {
    listaEl.innerHTML = `<ul id="list"></ul>`;
    if(tasks.length==0) {
        listaEl.innerHTML = `<ul id="list">Adicione uma tarefa</ul>`;
    } else {
        tasks.forEach((task) => {
            const el = document.createElement("li");
            el.innerHTML = `
                <li id="${task.id}">
                    <button id="${task.id}" onclick="checkTask(this)">${task.isCompleted?`<strike>${task.title}</strike>`:task.title}</button>
                    <button id="${task.id}" onclick="deletar(this)">Deletar</button>
                </li>`;
            listaEl.appendChild(el);
        });
    }

}
function deletar(e) {
    tasks.forEach(task => {
        if (e.id == task.id) {
            tasks = tasks.filter(el => el.id!=task.id);
        }
    });
    updateList();
}
function checkTask(e) {
    tasks.forEach(task => {
        if (e.id == task.id) {
            task.isCompleted = !task.isCompleted;
        }
    });
    updateList();
}
btnAdd.addEventListener("click", function () {
  const text = inputEl.value;
  if (text.trim() != "") {
    const task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title: text,
      isCompleted: false,
    };
    tasks.push(task);
    updateList();
    inputEl.value = "";
  }
});

