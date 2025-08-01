document.addEventListener("DOMContentLoaded", function() {
    updateList();
});

let btnDel = document.querySelector('#delTask');
const btnAdd = document.querySelector('#addTask');
const listaEl = document.querySelector('#list');
const inputEl = document.querySelector("#input");

const tasks = [
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
function updateList() {
    listaEl.innerHTML = `<ul id="list"></ul>`;
    tasks.forEach(task => {
        const el = document.createElement("li");
        el.innerHTML = `
            <li id="${task.id}">
                <button id="${task.id}">${task.title}</button>
                <button id="delTask">Deletar</button>
            </li>`;
        listaEl.appendChild(el);
    });
    btnDel = document.querySelector('#delTask');
}

btnAdd.addEventListener("click", function() {
    const text = inputEl.value;
    const task = {
        id: tasks.length>0?tasks[tasks.length-1].id+1:1,
        title: text,
        isCompleted: false,
    };
    tasks.push(task);
    updateList();
});
btnDel.addEventListener("click", function() {
    
})
