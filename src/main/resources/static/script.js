const API_URL = "http://localhost:8080/api/todos";
window.onload = loadTodos;

// Load all todos when page loads
function loadTodos() {
    fetch(API)
        .then(res => res.json())
        .then(todos => {
            const List = document.getElementById("todoList");
            List.innerHTML = "";
            let completed = 0;
            todos.forEach(todo => {
                if (todo.completed) completed++;

                const li = document.createElement("li");

                const span = document.createElement("span");
                span.textContent = todo.title;

                if (todo.completed) {
                    span.classList.add("completed");
                }

                // Toggle completed on click
                span.onclick = () => toggleTodo(todo.id);
                const actions = document.createElement("div");
                actions.className = "actions";

                const editBtn = document.createElement("button");
                editBtn.textContent = "✏️";
                editBtn.onclick = () => editTodo(todo.id, todo.title);

                const delBtn = document.createElement("button");
                delBtn.textContent = "🗑️";
                delBtn.onclick = () => deleteTodo(todo.id);

                actions.append(editBtn, delBtn);
                li.append(span , actions);

                list.appendChild(li);
            });
            updateStats(todos.length, completed);
        })
        .catch(error => console.error("Error loading todos:", error));
}

// Add new todo
function addTodo() {
    const input = document.getElementById("taskInput");
    if (!input.value.trim()) return;


    function addTodo() {
        const input = document.getElementById("taskInput");
        if (!input.value.trim()) return;

        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: input.value, completed: false })
        }).then(() => {
            input.value = "";
            loadTodos();
        });
    }


    function deleteTodo(id) {
        fetch(`${API}/${id}`, { method: "DELETE" })
            .then(loadTodos);
    }

    function toggleTodo(id) {
        fetch(`${API}/${id}`, { method: "PUT" })
            .then(loadTodos);
    }

    function editTodo(id, oldTitle) {
        const newTitle = prompt("Edit task", oldTitle);
        if (!newTitle) return;

        fetch(`${API}/${id}/edit`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle })
        }).then(loadTodos);
    }

    function updateStats(total, completed) {
        document.getElementById("stats").textContent =
            `Total: ${total} | Completed: ${completed} | Pending: ${total - completed}`;
    }

    function toggleTheme() {
        document.body.classList.toggle("dark");
    }