const API_URL = "http://localhost:8080/api/todos";

// Load all todos when page loads
function loadTodos() {
    fetch(API_URL)
        .then(response => response.json())
        .then(todos => {
            const todoList = document.getElementById("todoList");
            todoList.innerHTML = "";

            todos.forEach(todo => {
                const li = document.createElement("li");

                const span = document.createElement("span");
                span.textContent = todo.title;

                if (todo.completed) {
                    span.classList.add("completed");
                }

                // Toggle completed on click
                span.onclick = () => toggleTodo(todo.id);

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.onclick = () => deleteTodo(todo.id);

                li.appendChild(span);
                li.appendChild(deleteBtn);
                todoList.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading todos:", error));
}

// Add new todo
function addTodo() {
    const input = document.getElementById("taskInput");
    const title = input.value.trim();

    if (title === "")  {
        alert("Task cannot be empty!");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    })
        .then(() => {
            input.value = "";
            loadTodos();
        })
        .catch(error => console.error("Error adding todo:", error));
}

// Delete todo
function deleteTodo(id) {
    if (!confirm("Delete this task?")) return;
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(loadTodos)
        .catch(error => console.error("Error deleting todo:", error));
}

// Toggle completed status
function toggleTodo(id) {
    fetch(`${API_URL}/${id}`, {
        method: "PUT"
    })
        .then(loadTodos)
        .catch(error => console.error("Error toggling todo:", error));
}

// Initial load
loadTodos();
