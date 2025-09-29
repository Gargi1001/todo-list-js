const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const newTask = {
    text: taskText,
    priority: priority,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();
  taskInput.value = '';
});

function renderTasks() {
  taskList.innerHTML = ''; 

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    const textSpan = document.createElement('span');
    textSpan.textContent = task.text;
    textSpan.addEventListener('click', () => {
      task.completed = !task.completed;
      renderTasks();
    });

    const prioritySpan = document.createElement('span');
    prioritySpan.className = `priority ${task.priority.toLowerCase()}`;
    prioritySpan.textContent = task.priority;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.textContent = '🗑';
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(textSpan);
    li.appendChild(prioritySpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}
