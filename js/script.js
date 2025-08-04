const btnAdd = document.querySelector("#addTask");
const listaEl = document.querySelector("#list");
const inputEl = document.querySelector("#input");
let tasks = [];
document.addEventListener("DOMContentLoaded", function () {
  updateList();
});
function updateList() {
    listaEl.innerHTML = `<ul id="list"></ul>`;
    if(tasks.length==0) {
        listaEl.innerHTML = `Adicione uma tarefa`;
    } else {
        tasks.forEach((task) => {
            const el = document.createElement("li");
            el.id = task.id;
            el.innerHTML = `
              <button id="${task.id}" onclick="checkTask(this)">${task.isCompleted?`<strike>${task.title}</strike>`:task.title}</button>
              <button id="${task.id}" onclick="deletar(this)"><i class="fa-solid fa-trash"></i></button>`;
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

