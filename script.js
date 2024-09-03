const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAll = document.getElementById('clearAll');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'remove';
        deleteBtn.onclick = function(){
            taskList.removeChild(li);
        };
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';

        li.addEventListener('click', function(){
            li.classList.toggle('completed');
        });
    } else {
        window.alert("No new task has been added");
    }
}

function clearTasks() {
    if (taskList.getElementsByTagName("li").length !== 0){
        while(taskList.firstChild) taskList.removeChild(taskList.firstChild);
    } else {
        window.alert("There are no current tasks");
    }
    
}

clearAll.addEventListener('click', clearTasks);
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e){
    if (e.key == 'Enter'){
        addTask();    
    }
});

