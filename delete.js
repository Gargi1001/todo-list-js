function deleteTask(index) {
  tasks.splice(index, 1);   // remove task at given index
  renderTasks();            // re-render updated list
}


const deleteBtn = document.createElement('button');
deleteBtn.className = 'deleteBtn';
deleteBtn.textContent = '🗑';
deleteBtn.addEventListener('click', () => {
  deleteTask(index);   // call delete function
});
