// Selecting elements from the DOM
const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to create task item
function createTaskItem(taskName) {
    const li = document.createElement('li');
    li.innerText = taskName;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    
    return li;
}

// Event listener for form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskName = taskInput.value.trim();
    
    if (taskName !== '') {
        const taskItem = createTaskItem(taskName);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
