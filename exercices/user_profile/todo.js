
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function todo (){
    const task = document.getElementById("taskInput");
    const desc = document.getElementById("descriptionInput");

    if(!task) {
        alert("Task input not found!");
        task.focus();
        return;
    }

    // creer la tache
    const newTodo = {
        task: task.value,
        description: desc ? desc.value : "",
        completed: false
    };

    // ajouter la tache a la liste
    todos.unshift(newTodo);

    // reinitialiser les champs
    task.value = "";
    if(desc) desc.value = "";

    // afficher la liste des taches
    displayTodos();
}

function displayTodos() {
    const todoList = document.getElementById("taskList");
    if(!todoList) {
        alert("Todo list element not found!");
        return;
    }
    
    // vider la liste actuelle
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${todo.task} - ${todo.description} ${todo.completed ? "(Completed)" : ""}`;
        
        // bouton pour marquer comme complete
        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => {
            todos[index].completed = true;
            displayTodos();
        };
        
        listItem.appendChild(completeButton);
        todoList.appendChild(listItem);
    });
}

document.getElementById("addTaskButton").onclick = todo;

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.getElementById("taskInput").addEventListener("input", saveTodos);
document.getElementById("descriptionInput").addEventListener("input", saveTodos);

window.onload = displayTodos;