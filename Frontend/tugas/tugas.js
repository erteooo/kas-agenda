// tugas.js

const tasks = [
    { title: "Complete assignment", status: "Pending" },
    { title: "Read chapter 5", status: "Completed" },
    { title: "Prepare for exam", status: "Pending" },
];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.title} - Status: ${task.status}`;
        taskList.appendChild(li);
    });
}

// Call the function to render tasks on page load
document.addEventListener('DOMContentLoaded', renderTasks);