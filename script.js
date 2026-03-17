let todos = [
    {id: "P01", task: "Nghe nhạc", isDone: true},
    {id: "P02", task: "Chơi game", isDone: true},
    {id: "P03", task: "Học bài", isDone: false}
];
let listEl = document.getElementById("list_task");
let btn = document.getElementById("btn-add");
let inputEl = document.getElementById("inputTask");
let btn_edit = document.getElementById("btn-update");
let idUpdate;
let idDelete;
const renderData = () => {
    listEl.innerHTML = '';

    todos = JSON.parse(localStorage.getItem("listTodo")) || todos;

    localStorage.setItem("listTodo", JSON.stringify(todos));
    
    todos.forEach((a) => {
    let li = document.createElement("li");
    li.innerHTML = ` <div>
    ${a.task}
    <button onclick = "handleEditTask('${a.id}')">Sửa</button>
    <button onclick = "handleDeleteTask('${a.id}')">Xóa</button>
    </div>`;
    listEl.appendChild(li);
});

};
renderData();
const handleAddTask = () => {
     let todo = {
        id:Date.now(),
        task:inputEl.value,
        isDone:false
     }
     todos.push(todo);
     localStorage.setItem("listTodo", JSON.stringify(todos));
     renderData();
     inputEl.value = '';
}
let index;
btn.addEventListener("click",handleAddTask);
const handleEditTask = (idTask) => {
    index = todos.findIndex((a) => {    
        return a.id == idTask;
    });
    inputEl.value = todos[index].task;
    idUpdate = idTask;
    btn.style.display = "none";
    btn_edit.style.display = "inline";
    inputEl.focus();
    idUpdate = idTask;
    console.log(index);
};
btn_edit.addEventListener("click" , () => {
    let newTask = inputEl.value;
    todos[index].task = newTask;
    localStorage.setItem("listTodo",JSON.stringify(todos));
    renderData();
    btn.style.display = "inline";
    btn_edit.style.display = "none";
    inputEl.value = '';
});
const handleDeleteTask = (idTask) => {
    let index = todos.findIndex((a) => {
        return a.id == idTask;
    });
    todos.splice(index,1);
    localStorage.setItem("listTodo",JSON.stringify(todos));
    renderData();
}