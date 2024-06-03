// JavaScript for Adding Tasks
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-buttons">
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    }
});


// Marking Tasks as Completed
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-buttons">
                    <button class="complete-button">Complete</button>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        const target = event.target;
        const taskItem = target.closest('.task');

        if (target.classList.contains('complete-button')) {
            taskItem.classList.toggle('completed');
        }
    }
});



// Deleting Tasks
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-buttons">
                    <button class="complete-button">Complete</button>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        const target = event.target;
        const taskItem = target.closest('.task');

        if (target.classList.contains('complete-button')) {
            taskItem.classList.toggle('completed');
        } else if (target.classList.contains('delete-button')) {
            taskItem.remove();
        }
    }
});



// Editing Tasks
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-buttons">
                    <button class="complete-button">Complete</button>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        const target = event.target;
        const taskItem = target.closest('.task');

        if (target.classList.contains('complete-button')) {
            taskItem.classList.toggle('completed');
        } else if (target.classList.contains('delete-button')) {
            taskItem.remove();
        } else if (target.classList.contains('edit-button')) {
            const taskText = taskItem.querySelector('span').innerText;
            newTaskInput.value = taskText;
            taskItem.remove();
        }
    }
});



// Persisting Tasks with Local Storage
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-button');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    loadTasks();

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div class="task-buttons">
                    <button class="complete-button">Complete</button>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = '';
            saveTasks();
        }
    }

    function handleTaskClick(event) {
        const target = event.target;
        const taskItem = target.closest('.task');

        if (target.classList.contains('complete-button')) {
            taskItem.classList.toggle('completed');
        } else if (target.classList.contains('delete-button')) {
            taskItem.remove();
        } else if (target.classList.contains('edit-button')) {
            const taskText = taskItem.querySelector('span').innerText;
            newTaskInput.value = taskText;
            taskItem.remove();
        }
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.task').forEach(taskItem => {
            const taskText = taskItem.querySelector('span').innerText;
            const completed = taskItem.classList.contains('completed');
            tasks.push({ text: taskText, completed });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            taskItem.innerHTML = `
                <span>${task.text}</span>
                <div class="task-buttons">
                    <button class="complete-button">Complete</button>
                    <button class="edit-button">Edit</button>
                    <button class="delete-button">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    }
});
