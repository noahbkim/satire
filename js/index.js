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


var dropdowns = document.getElementsByClassName("dropdown");
var current = null;

for (var i = 0; i < dropdowns.length; i++) {
    var element = dropdowns[i];
    element.addEventListener("click", function() {
        if (current)
            current.classList.remove("down");
        if (current !== this) {
            this.classList.add("down");
            current = this;
        }
    });
}
