var tasks = [];

function renderTasks() {
var taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    // Add the task to the task list
    taskList.innerHTML += createTaskListItem(task, i);
  }
}

function createTaskListItem(task, index) {
  return `
    <li>
      <div class="task-btn">
        <span class="task-text">${task.text}</span>
      </div>
      <button class="edit-btn" onclick="editTask(${index})">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn" onclick="deleteTask(${index})">
        <i class="fas fa-trash"></i>
      </button>
    </li>
  `;
}

function editTask(index) {
  var task = tasks[index];
  var newText = prompt("Enter new task text:", task.text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText;
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function addTask() {
  var inputTask = document.getElementById('inputTask');
  var text = inputTask.value.trim();

  if (text === '')
    return;
  tasks.push({ text });
  inputTask.value = '';
  renderTasks();
}

// Event listener to add task on Enter key press
document.getElementById('inputTask').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Add event listener to the add task button
document.getElementById('addTaskBtn').addEventListener('click', addTask);