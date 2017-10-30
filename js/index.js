var todoList = document.getElementById("todo-list");

function addTodo() {
    var element = document.createElement("li");
    element.innerHTML = "<input type='checkbox'><span>Take another one of our CRAP tests</span>";
    todoList.appendChild(element);
    element.firstChild.addEventListener("click", function(e) {
        if (!e.srcElement.checked) removeTodo();
        else addTodo();
    });
}

function removeTodo() {
    todoList.removeChild(todoList.lastChild);
}

document.getElementById("first-checkbox").addEventListener("change", function(e) {
    if (!e.srcElement.checked) removeTodo();
    else addTodo();
});
