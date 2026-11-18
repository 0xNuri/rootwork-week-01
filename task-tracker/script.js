const taskForm = document.querySelector('.new-task-creator form');
const taskInput = document.querySelector('.new-task');
const taskList = document.querySelector('.task-list')
const newTaskForm = document.querySelector ('(data-new-list-form)')
const newTaskInput = document.querySelector ('(data-new-list-input)')
const tasksContainer = document.querySelector('.tasks-container');
const errorMessage = document.getElementById('error-message')

let tasks = [
    { id: '1', name: 'Revise rootwork assignment', complete: false },
    { id: '2', name: 'Get lunch', complete: true }
];

taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName === null || taskName === '') {
        errorMessage.textContent = 'Please enter a valid task name!';
        return;
    }
        errorMessage.textContent = '';
    const task = createTask(taskName);
    taskInput.value = null
    tasks.push(task);
    render()
})
 function createTask(name){
   return {id: Date.now().toString(), name: name, complete:false}
 }
function render (){
    clearElement(tasksContainer)
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add("task");
        taskElement.dataset.taskid = task.id

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = task.id;
        checkbox.checked = task.complete;
         
        const label = document.createElement ('label');
        label.htmlFor = task.id;

        const customCheckbox = document.createElement('span');
        customCheckbox.classList.add('custom-checkbox');

        label.appendChild(customCheckbox);
        label.append(task.name);

        const deletebutton = document.createElement('button');
        deletebutton.classList.add ('btn-delete-one');

        deletebutton.textContent = 'X';
        deletebutton.setAttribute('aria-label', `Delete ${task.name}`);

        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deletebutton);

        
        tasksContainer.appendChild(taskElement);

    });
}
function clearElement(element){
while (element.firstChild){
    element.removeChild(element.firstChild);
}
}

render ()