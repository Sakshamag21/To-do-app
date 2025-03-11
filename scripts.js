// Toggle Dark/Light Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let themeButton = document.querySelector(".theme-toggle");
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

// Add Task with Category
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    let category = document.getElementById("categorySelect").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.setAttribute("data-category", category);

    li.innerHTML = `
        <span class="task-text" onclick="toggleComplete(this)">${taskText} <span class="category-tag">[${category}]</span></span>
        <button class="delete-btn" onclick="removeTask(this)">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Toggle Task Completion
function toggleComplete(taskElement) {
    taskElement.classList.toggle("completed");
}

// Remove Task
function removeTask(button) {
    let li = button.parentElement;
    li.remove();
}

// Search Tasks
function searchTasks() {
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        let taskText = task.querySelector(".task-text").textContent.toLowerCase();
        task.style.display = taskText.includes(searchValue) ? "flex" : "none";
    });
}

// Filter Tasks by Category
function filterTasks() {
    let selectedCategory = document.getElementById("filterCategory").value;
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        let taskCategory = task.getAttribute("data-category");
        task.style.display = (selectedCategory === "All" || taskCategory === selectedCategory) ? "flex" : "none";
    });
}
