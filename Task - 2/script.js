document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskPriority = document.getElementById('task-priority').value;
    const taskCategory = document.getElementById('task-category').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const task = {
        text: taskInput.value,
        priority: taskPriority,
        category: taskCategory,
        dueDate: taskDueDate,
        complete: false
    };

    addTaskToList(task);
    taskInput.value = '';
});

function addTaskToList(task) {
    const tasksUl = document.getElementById('tasks');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${task.text} - ${task.priority} - ${task.category} - ${task.dueDate}</span>
        <div>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    tasksUl.appendChild(li);
}

function completeTask(button) {
    const li = button.parentNode.parentNode;
    li.classList.toggle('task-complete');
}

function deleteTask(button) {
    const li = button.parentNode.parentNode;
    li.remove();
}
