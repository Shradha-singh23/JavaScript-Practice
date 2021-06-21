const task  = document.getElementById('task-bar');
const addButton = document.getElementsByClassName('add-button')[0];
const taskList = document.getElementsByClassName('task-list')[0];
const completedTasks = document.getElementsByClassName('completed-task-list')[0];
const msg = document.getElementsByClassName('msg')[0];

addButton.addEventListener('click', addTask);

function addTask(e){
    e.preventDefault();
    const taskValue = task.value.trim();
    if (taskValue === '') {
        return addMessage();
    } 

    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task-div");

    const taskButton = document.createElement('button');
    taskButton.innerHTML = taskValue;
    taskButton.classList.add("task-item");
    taskDiv.appendChild(taskButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    deleteButton.classList.add("delete-button");
    taskDiv.append(deleteButton);

    taskList.insertBefore(taskDiv,taskList.childNodes[0]);

    deleteButton.addEventListener('click', deleteTask);
    taskButton.addEventListener('click', completeTask);

    task.value = '';    

}

function deleteTask(e){
    e.preventDefault()
    const isConfirmed = confirm("Are you sure you want to delete?");
    if (!isConfirmed){
        return;
    } 
    const item = e.target;
    const task = item.parentElement;
    task.remove();
}

function completeTask(e){
    e.preventDefault();
    const item = e.target;
    const doneTask = item.parentElement;
    item.classList.add("completed-task");
    item.addEventListener('click', toggleCompletedTask)
    completedTasks.appendChild(doneTask);
}

function toggleCompletedTask(e){
    e.preventDefault();
    const item = e.target;
    const ongoingTask = item.parentElement;
    item.removeEventListener('click', toggleCompletedTask);
    item.addEventListener('click', completeTask);
    taskList.appendChild(ongoingTask);
    item.classList.remove("completed-task");
}

function addMessage(){
    msg.innerHTML = 'Task should not be blank';
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 1000);
    msg.value='';
}