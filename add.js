const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addBtn = document.getElementById('addBtn');

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

  tasks.push(newTask);   // ✅ Task added to the list
  console.log(tasks);    // just to check in console

  taskInput.value = '';  // clear input after adding
});
