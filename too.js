function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
  
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      taskList.removeChild(taskItem);
    };
  
    taskItem.appendChild(deleteButton);
    taskItem.onclick = function() {
      taskItem.classList.toggle('completed');
    };
  
    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input
  }
  