function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Vui lòng nhập nội dung công việc!');
        return;
    }

    const ul = document.getElementById('todoList');


    const li = document.createElement('li');
    li.className = 'todo-item';


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function () {
        toggleTask(this);
    };


    const span = document.createElement('span');
    span.className = 'task-text';
    span.innerText = taskText;


    const deleteBtn = document.createElement('span');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = '✕';
    deleteBtn.onclick = function () {
        deleteTask(this);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);


    input.value = '';
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}


function toggleTask(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}


function deleteTask(deleteBtn) {
    const li = deleteBtn.parentElement;
    li.remove();
}