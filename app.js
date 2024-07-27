document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskContent.addEventListener('click', function() {
        taskContent.classList.toggle('complete');
    });

    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';
});
